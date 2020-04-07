import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { PositionComponent } from './components/position/position.component';
import { ResumeComponent } from './resume.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ResumeComponent,
		PositionComponent
	],
	exports: [
		ResumeComponent
	]
})
export class ResumeModule { }
