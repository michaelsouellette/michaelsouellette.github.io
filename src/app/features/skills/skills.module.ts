import { NgModule } from '@angular/core';

// Components
import { SkillsComponent } from './skills.component';

@NgModule({
	declarations: [
		SkillsComponent
	],
	exports: [
		SkillsComponent
	]
})
export class SkillsModule { }
