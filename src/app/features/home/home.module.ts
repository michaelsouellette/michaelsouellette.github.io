import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		HomeComponent
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
