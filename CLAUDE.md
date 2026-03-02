# CLAUDE.md — Project Guide

This file captures the architecture decisions, rules, and patterns established for this project.
Reference it at the start of any session.

---

## Project Overview

Personal portfolio site for Michael Ouellette. Angular 21 SSR application hosted on GitHub Pages.

- **URL**: https://michael.ouellette.dev
- **Framework**: Angular 21.2.x (NgModule architecture, zone-less)
- **Build**: `@angular/build:application` (esbuild + Vite)
- **SSR**: `@angular/ssr` via CommonEngine in `server.ts`
- **Tests**: Vitest via `@angular/build:unit-test`
- **Node**: >=22.0.0 required

---

## Commands

```bash
npm run build          # ng build (development)
npm run build:ssr      # ng build --configuration production (SSR production build)
npm test               # ng test (Vitest, watch mode)
ng test --no-watch     # Single test run (use this in CI)
npm run lint           # ng lint (ESLint)
npm run dev:ssr        # ng run app:serve-ssr (local SSR dev server)
npm run serve:ssr      # node dist/app/server/server.mjs (serve built SSR output)
npm run prerender      # ng run app:prerender
```

---

## Codebase Navigation

```
src/
  app/
    app.component.*          # Root component — renders <app-navigation>, <router-outlet>, <app-footer>
    app.module.ts            # Root NgModule — all routes, imports, provideZonelessChangeDetection()
    app.server.module.ts     # SSR bootstrap module
    app-routing.module.ts    # (routes defined inline in app.module.ts)

    common/
      navigation/            # Top navigation bar
      footer/                # Footer

    features/
      about/                 # About section component
      contact/               # Contact section component
      home/                  # Hero/landing section (social icons, name)
      resume/                # Resume feature
        resume.component.*   # Container: renders <app-resume-body> + <app-skills>
        resume.module.ts     # Declares all resume sub-components
        components/
          position/          # Old-style position card (string description)
          position/new/      # New-style position card (array description, *ngFor list)
          resume-body/       # Left column: professional/freelance/education experience
          skills/            # Right column: star-rating skills display
      skills/                # Technology proficiencies grid (languages/icons)

    main/                    # Main layout — renders all feature sections together
    no-content/              # 404 page

  main.ts                    # Browser bootstrap
  main.server.ts             # SSR bootstrap (exports AppServerModule + default)
  vitest.d.ts                # /// <reference types="vitest/globals" />

server.ts                    # Express SSR server (CommonEngine, HTML minification)
vitest.config.ts             # Vitest config (globals: true, environment: jsdom)

angular.json                 # Build/test/serve/SSR/prerender targets
tsconfig.json                # Base TS config (moduleResolution: bundler, target: ES2022)
tsconfig.app.json            # App compilation (files: main.ts, main.server.ts, server.ts)
tsconfig.spec.json           # Test compilation (include: src/**/*.ts for full module context)
tsconfig.server.json         # SSR-specific TS config
.eslintrc.json               # ESLint config
.prettierrc                  # Prettier config
karma.conf.js                # LEGACY — Karma replaced by Vitest; this file is unused
```

---

## Architecture Decisions

### NgModule (intentional — not standalone)
The app uses NgModule-based architecture. This is a deliberate choice, not an oversight.
- All components have `standalone: false`
- The `@angular-eslint/prefer-standalone` rule is **disabled** in `.eslintrc.json`
- Do NOT migrate to standalone components unless explicitly requested

### Zone-less Change Detection
- `zone.js` has been removed entirely — it is **not** in dependencies
- `provideZonelessChangeDetection()` is registered in `AppModule` providers
- The SSR `server.ts` does **not** import `zone.js/node`
- In tests, use `async` directly — **do not** use `waitForAsync` (requires zone.js ProxyZone)

### Build System (Vite/esbuild — not webpack)
- Builder: `@angular/build:application` (replaces the old `@angular-builders/custom-webpack:browser`)
- SCSS `@use 'src/styles/...'` paths require `stylePreprocessorOptions.includePaths: ["."]` in angular.json
- Font inlining is disabled (`fonts.inline: false`) — no network access in build environment

### SSR
- Uses `@angular/ssr` `CommonEngine` (replaces `@nguniversal/express-engine`)
- `server.ts` imports `AppServerModule` from `./src/main.server`
- `src/main.server.ts` must export both named and `default` export of `AppServerModule`
- Dist output: `dist/app/browser/` (static) and `dist/app/server/server.mjs` (SSR entry)

### Tests (Vitest)
- Runner: `@angular/build:unit-test` with `runner: vitest`
- `tsconfig.spec.json` uses `include: ["src/**/*.ts"]` (not just `*.spec.ts`) so the Angular compiler has full module context for template type checking at build time
- Components with child component selectors in templates need stub components declared in the test module (see `app.component.spec.ts`, `main.component.spec.ts`, `resume.component.spec.ts`)
- Components requiring `@Input()` must have that input set before `fixture.detectChanges()` (see `position.component.spec.ts`)

---

## Code Patterns

### Dependency Injection
Use `inject()` — **not** constructor injection:
```typescript
// ✅ correct
private skillsInfo = inject(SkillsInfo);

// ❌ avoid
constructor(private skillsInfo: SkillsInfo) {}
```

### Template Control Flow
Use Angular 17+ built-in control flow — **not** structural directives:
```html
<!-- ✅ correct -->
@for (item of items; track item.id) { ... }
@if (condition) { ... } @else { ... }

<!-- ❌ avoid -->
<div *ngFor="let item of items">
<div *ngIf="condition">
```

### Lifecycle Hooks
Do not add empty lifecycle hooks. Only implement `ngOnInit` etc. when they contain logic.

### TypeScript
- `moduleResolution: "bundler"` is required (not `"node"`) for Angular 21 subpath exports
- Strict templates are enabled for tests (`angularCompilerOptions.strictTemplates: true` in `tsconfig.spec.json`)

---

## Formatting Rules (Prettier)

- **Tabs** for indentation (not spaces), tab width = 4
- **Single quotes** for strings
- Print width: 150
- No trailing commas
- Semicolons: yes
- YAML files: 2-space indent, no tabs (configured via overrides)

---

## ESLint Rules

Key active rules:
- `@angular-eslint/no-empty-lifecycle-method` — no empty `ngOnInit()` etc.
- `@angular-eslint/prefer-inject` — use `inject()` over constructor injection
- `@angular-eslint/template/prefer-control-flow` — use `@if`/`@for` over `*ngIf`/`*ngFor`
- `@angular-eslint/prefer-standalone` — **OFF** (intentional NgModule architecture)

---

## GitHub Actions Workflows

| File | Trigger | Purpose |
|------|---------|---------|
| `dev.yml` | push to `dev` | Build (SSR) + deploy artifact |
| `pr-check.yml` | PR → `dev` | Build + Test + Lint in parallel matrix |
| `production.yml` | push to `main` | Production deployment |
| `autotag.yml` | push | Auto-tagging |
| `delete-artifacts.yml` | scheduled | Clean up old artifacts |
| `stylelintcheck.yml` | PR/push | SCSS linting |

**Note**: `dev.yml` references `npm run build:render` which does **not** exist in `package.json`.
The correct script is `npm run build:ssr`. This should be fixed in `dev.yml`.

**Node version**: All workflows should use `22.x` (project requires `>=22.0.0`). `dev.yml` still uses `20.18.x` — this needs updating.

---

## Known Issues / Tech Debt

### 🔴 Critical — CI is currently broken
| # | Issue | File | Fix |
|---|-------|------|-----|
| 1 | `npm run build:render` does not exist — both deploy workflows fail at build step | `dev.yml:37`, `production.yml:35` | Change to `npm run build:ssr` |
| 2 | `production.yml` deploys to `./app/browser` — missing the `dist/` prefix | `production.yml` | Change to `dist/app/browser` |
| 3 | `stylelintcheck.yml` runs `npm run stylelint` which does not exist | `stylelintcheck.yml` | Add a `stylelint` script or remove this workflow |

### 🟠 High — Incorrect / broken configuration
| # | Issue | File | Fix |
|---|-------|------|-----|
| 4 | `dev.yml` and `production.yml` use Node `20.18.x`; engine requires `>=22.0.0` | `dev.yml:14`, `production.yml:12` | Change to `22.x` |
| 5 | `npm run build:copy:files` referenced by `build:production` script does not exist | `package.json` | Remove or implement the script |
| 6 | `angular-cli-ghpages` is a deploy tool listed in `dependencies` (runtime) | `package.json` | Move to `devDependencies` |
| 7 | `IPositionNew.description` typed as `object` but always a `string[]`; template uses `$any()` cast to work around it | `position.model.ts:30` | Change type to `string[]`; then remove `$any()` from template |

### 🟡 Medium — Unused packages / dead code
| # | Issue | File | Fix |
|---|-------|------|-----|
| 8 | `@angular/animations` is installed but never imported anywhere in source | `package.json` | Remove from `dependencies` |
| 9 | `@angular/forms` is installed but there are no forms in the app | `package.json` | Remove from `dependencies` |
| 10 | `ts-node` devDep is not used by any script, config, or builder | `package.json` | Remove from `devDependencies` |
| 11 | `karma.conf.js` references packages that don't exist; Karma replaced by Vitest | `karma.conf.js` | Delete the file |
| 12 | Duplicate `React` entry in skills data (different star ratings: 3.5 and 3.0) | `resume/components/skills/skills.data.ts` | Remove the duplicate |
| 13 | `isLast` captured in `@for` but never used in the template body | `resume/components/skills/skills.component.html:3` | Remove `; let isLast = $last` |
| 14 | `environment.ts` / `environment.prod.ts` exist and are wired up in angular.json but never imported | `src/environments/` | Delete both files and remove from `angular.json` file replacements |
| 15 | `CommonModule` imported by every NgModule — provides nothing now that `@if`/`@for` control flow is used | All `*.module.ts` files | Remove `CommonModule` from all module imports |

### 🟢 Low — Modernization / code quality
| # | Issue | File | Fix |
|---|-------|------|-----|
| 16 | `::ng-deep` is deprecated in Angular | `resume/resume.component.scss:7` | Move `h4` styles into child component SCSS or global styles |
| 17 | `@Input() data` on both position components could use the signal `input()` API | `position/position.component.ts:12`, `position/new/position.component.ts:12` | Migrate to `data = input.required<IPosition>()` |
| 18 | Three components use `ngOnInit` purely to assign a service return value — could be inline field initializers | `resume-body`, `skills` (both) components | `public skills = inject(SkillsInfo).getInfo();` eliminates `ngOnInit` entirely |
| 19 | Empty `constructor() { }` in 10 components (AppComponent, FooterComponent, NavigationComponent, AboutComponent, ContactComponent, HomeComponent, PositionComponent, PositionNewComponent, ResumeComponent, MainComponent, NoContentComponent) | Many components | Delete empty constructors |
| 20 | `styleUrls: ['./x.scss']` single-element array should be `styleUrl: './x.scss'` (singular, Angular 15+) | All components | Rename to `styleUrl` |
| 21 | tsconfig path aliases defined but never used; `@feature/*` has a typo (should be `@features/*`) | `tsconfig.json` | Remove aliases or start using them consistently |
| 22 | `downlevelIteration: true` in tsconfig is for ES5 targets; unnecessary with `target: ES2022` | `tsconfig.json` | Remove |
| 23 | `emitDecoratorMetadata: true` is a legacy NgModule DI flag; will be removable when migrating to standalone | `tsconfig.json` | Remove after standalone migration |
| 24 | `strict` and `strictNullChecks` not enabled; `@Input() data` fields are `undefined` at runtime if parent forgets to pass them | `tsconfig.json` | Add `"strict": true` |
| 25 | `strictTemplates: false` in spec tsconfig hides type errors in component templates during test builds | `tsconfig.spec.json` | Set to `true` once type bugs (#7) are fixed |
| 26 | Classes named `IPosition`, `IPositionNew`, `ISkill`, `IResumeSkills` with `I` prefix are classes, not interfaces | `*.model.ts` files | Rename to `Position`, `Skill`, etc. or convert to `interface` |
| 27 | `watch: false` not set in angular.json test target — `ng test` blocks in watch mode locally | `angular.json` test target | Add `"watch": false` to test options |
| 28 | `.browserslistrc` has a misleading `# For IE 9-11 support, remove 'not'` comment | `.browserslistrc` | Remove the comment; IE has been unsupported since Angular 13 |
| 29 | `insertPragma: true` in `.prettierrc` adds `/** @format */` to files, but there is no `format` script in package.json | `.prettierrc`, `package.json` | Add a `"format": "prettier --write ."` script |
| 30 | Double semicolon `;;` in home component SCSS | `home.component.scss:46` | Remove extra semicolon |

---

## Migration History (Angular 16 → 21)

Key breaking changes handled during the v16→v21 upgrade:

| Change | Action taken |
|--------|-------------|
| `BrowserModule.withServerTransition()` removed | Replaced with plain `BrowserModule` |
| `enableProdMode()` removed | Deleted all calls |
| `renderModule` removed from platform-server | Removed from `main.server.ts` |
| `@nguniversal/*` removed | Replaced with `@angular/ssr` (CommonEngine) |
| `@angular-builders/custom-webpack` removed | Replaced with `@angular/build:application` |
| Karma/Jasmine removed | Replaced with Vitest via `@angular/build:unit-test` |
| Default `standalone: true` in Angular 19+ | Added `standalone: false` to all components |
| `moduleResolution: "node"` fails for subpath exports | Changed to `"bundler"` |
| `RouterTestingModule` removed | Use `provideRouter([])` + stub components |
| `waitForAsync` requires ProxyZone | Replaced with plain `async` + removed zone.js |
| `zone.js` entirely removed | Added `provideZonelessChangeDetection()` |
