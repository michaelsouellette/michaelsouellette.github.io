import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './home.component';

@NgModule({
	declarations: [
		HomeComponent
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
