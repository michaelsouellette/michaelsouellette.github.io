import { NgModule } from '@angular/core';
// Components
import { PositionComponent } from './components/position/position.component';
import { PositionNewComponent } from './components/position/new/position.component';
import { ResumeBodyComponent } from './components/resume-body/resume-body.component';
import { ResumeComponent } from './resume.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
	declarations: [
		ResumeComponent,
		PositionComponent,
		PositionNewComponent,
		SkillsComponent,
		ResumeBodyComponent
	],
	exports: [
		ResumeComponent
	]
})
export class ResumeModule { }
