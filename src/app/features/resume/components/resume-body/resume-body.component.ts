import { Component, OnInit } from '@angular/core';

import { IPosition } from '../position/position.model';
import { EducationInfo, FreelanceInfo, ProfessionalInfo } from './resume.data';

@Component({
	selector: 'app-resume-body',
	templateUrl: './resume-body.component.html',
	styleUrls: ['./resume-body.component.scss'],
	providers: [
		EducationInfo,
		FreelanceInfo,
		ProfessionalInfo
	]
})
export class ResumeBodyComponent implements OnInit {
	public freelanceExperience: IPosition[] ;
	public professionalExperience: IPosition[];
	public education: IPosition[];

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
