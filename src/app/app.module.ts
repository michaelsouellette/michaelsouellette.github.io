import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// App Component
import { AppComponent } from './app.component';

// Modules
import { NavigationModule } from './common/navigation/navigation.module';
import { AboutModule } from './features/about/about.module';
import { HomeModule } from './features/home/home.module';

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
		NavigationModule,
		AboutModule,
		HomeModule
	],
	providers: [
		APP_PROVIDERS
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
