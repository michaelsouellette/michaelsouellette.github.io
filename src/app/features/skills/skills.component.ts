import { Component, inject } from '@angular/core';

import { SkillsInfo } from './skills.data';
import { Skill } from './skills.model';

@Component({
	standalone: false,
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
	providers: [
		SkillsInfo
	]
})
export class SkillsComponent {
	public skills: Skill[] = inject(SkillsInfo).getInfo();
}
