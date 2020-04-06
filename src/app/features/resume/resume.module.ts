import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ResumeComponent } from './resume.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ResumeComponent
	],
	exports: [
		ResumeComponent
	]
})
export class ResumeModule { }
