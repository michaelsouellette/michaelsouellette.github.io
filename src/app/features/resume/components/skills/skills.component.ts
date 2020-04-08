import { Component, OnInit } from '@angular/core';

import { ResumeSkills } from './skills.data';
import { IResumeSkills } from './skills.model';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	providers: [ResumeSkills]
})
export class SkillsComponent implements OnInit {
	public skillsData: IResumeSkills[] ;

	constructor(
		private resumeSkills: ResumeSkills,
	) { }

	ngOnInit(): void {
		this.skillsData = this.resumeSkills.getInfo();
	}

	public counter(i: number) {
		const returnable = Array(i).fill(0).map((x, i) => i);
		return returnable;
	}
}
