import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { SkillsComponent } from './skills.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SkillsComponent
	],
	exports: [
		SkillsComponent
	]
})
export class SkillsModule { }
