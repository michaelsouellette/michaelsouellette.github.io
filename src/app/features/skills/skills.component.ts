import { Component, OnInit } from '@angular/core';

import { SkillsInfo } from './skills.data';
import { ISkill } from './skills.model';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	providers: [
		SkillsInfo
	]
})
export class SkillsComponent implements OnInit {
	public skills: ISkill[];

	constructor(
		private skillsInfo: SkillsInfo
	) { }

	ngOnInit(): void {
		this.skills = this.skillsInfo.getInfo();
	}

}
