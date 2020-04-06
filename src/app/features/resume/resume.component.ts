import { Component, OnInit } from '@angular/core';

import { EducationInfo, FreelanceInfo, ProfessionalInfo } from './resume.data';
import { IEducation, IJob } from './resume.model';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss'],
	providers: [
		EducationInfo,
		FreelanceInfo,
		ProfessionalInfo
	]
})
export class ResumeComponent implements OnInit {
	public freelanceExperience: IJob[] ;
	public professionalExperience: IJob[];
	public education: IEducation[];

	constructor(
		private educationInfo: EducationInfo,
		private freelanceInfo: FreelanceInfo,
		private professionalInfo: ProfessionalInfo
	) { }

	ngOnInit(): void {
		this.freelanceExperience = this.freelanceInfo.getInfo();
		this.professionalExperience = this.professionalInfo.getInfo();
		this.education = this.educationInfo.getInfo();
	}
}
