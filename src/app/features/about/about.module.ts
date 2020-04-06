import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { AboutComponent } from './about.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		AboutComponent
	],
	exports: [
		AboutComponent
	]
})
export class AboutModule { }
