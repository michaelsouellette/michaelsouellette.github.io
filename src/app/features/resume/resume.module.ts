import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { PositionComponent } from './components/position/position.component';
import { ResumeBodyComponent } from './components/resume-body/resume-body.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './resume.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ResumeComponent,
		PositionComponent,
		SkillsComponent,
		ResumeBodyComponent
	],
	exports: [
		ResumeComponent
	]
})
export class ResumeModule { }
