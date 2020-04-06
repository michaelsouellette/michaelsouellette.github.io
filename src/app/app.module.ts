import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// App Component
import { AppComponent } from './app.component';

// Modules
import { FooterModule } from './common/footer/footer.module';
import { NavigationModule } from './common/navigation/navigation.module';
import { AboutModule } from './features/about/about.module';
import { HomeModule } from './features/home/home.module';
import { SkillsModule } from './features/skills/skills.module';

const APP_PROVIDERS = [
];

const APP_ROUTES: Routes = [
	// { path: '404', component: NoContentComponent },
	// { path: '**', component: NoContentComponent },
	{ path: '', component: AppComponent }
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(APP_ROUTES, {
			useHash: Boolean(history.pushState) === false,
			initialNavigation: 'enabled',
			onSameUrlNavigation: 'ignore',
			enableTracing: false
		}),
		FooterModule,
		NavigationModule,
		AboutModule,
		HomeModule,
		SkillsModule
	],
	providers: [
		APP_PROVIDERS
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
