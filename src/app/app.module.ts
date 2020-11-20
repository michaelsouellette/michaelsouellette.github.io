import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// App Component
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content/no-content.component';

// Modules
import { FooterModule } from './common/footer/footer.module';
import { NavigationModule } from './common/navigation/navigation.module';
import { AboutModule } from './features/about/about.module';
import { ContactModule } from './features/contact/contact.module';
import { HomeModule } from './features/home/home.module';
import { ResumeModule } from './features/resume/resume.module';
import { SkillsModule } from './features/skills/skills.module';
import { MainComponent } from './main/main.component';

const APP_PROVIDERS = [
];

const APP_ROUTES: Routes = [
	{ path: '', component: MainComponent },
	{ path: '**', component: NoContentComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		NoContentComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		RouterModule.forRoot(APP_ROUTES, {
    		initialNavigation: 'enabled',
    		onSameUrlNavigation: 'ignore',
    		enableTracing: false,
    		relativeLinkResolution: 'legacy'
		}),
		FooterModule,
		NavigationModule,
		AboutModule,
		ContactModule,
		HomeModule,
		ResumeModule,
		SkillsModule
	],
	providers: APP_PROVIDERS,
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
