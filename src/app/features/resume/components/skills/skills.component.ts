import { Component, inject } from '@angular/core';

import { ResumeSkills } from './skills.data';
import { ResumeSkill } from './skills.model';

@Component({
	standalone: false,
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
	providers: [ResumeSkills]
})
export class SkillsComponent {
	public skillsData: ResumeSkill[] = inject(ResumeSkills).getInfo();

	public isDecimal(i: number) {
		return Math.floor(i) === i;
	}

	public mathCeiling(i: number) {
		return Math.ceil(i);
	}
}
