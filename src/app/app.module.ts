/** @format */

import { RouterModule, Routes } from '@angular/router';

import { AboutModule } from './features/about/about.module';
// App Component
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactModule } from './features/contact/contact.module';
// Modules
import { FooterModule } from './common/footer/footer.module';
import { HomeModule } from './features/home/home.module';
import { MainComponent } from './main/main.component';
import { NavigationModule } from './common/navigation/navigation.module';
import { NgModule } from '@angular/core';
import { NoContentComponent } from './no-content/no-content.component';
import { ResumeModule } from './features/resume/resume.module';
import { SkillsModule } from './features/skills/skills.module';

const APP_PROVIDERS = [];

const APP_ROUTES: Routes = [
	{ path: '', component: MainComponent },
	{ path: '**', component: NoContentComponent }
];

@NgModule({
	declarations: [AppComponent, MainComponent, NoContentComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		RouterModule.forRoot(APP_ROUTES, {
    initialNavigation: 'enabledBlocking',
    onSameUrlNavigation: 'ignore',
    enableTracing: false
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
	bootstrap: [AppComponent]
})
export class AppModule {}
