import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
