import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsInfo } from './skills.data';
import { ISkill } from './skills.model';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    providers: [
        SkillsInfo
    ],
    standalone: true,
    imports: [CommonModule]
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
