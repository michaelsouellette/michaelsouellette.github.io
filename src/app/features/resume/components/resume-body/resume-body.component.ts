import { Component, OnInit, inject } from '@angular/core';
import { EducationInfo, FreelanceInfo, ProfessionalInfo } from './resume.data';
import { IPosition, IPositionNew } from '../position/position.model';

@Component({
	standalone: false,
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
	public freelanceExperience: IPosition[];
	public professionalExperience: IPositionNew[];
	public education: IPosition[];

	private educationInfo = inject(EducationInfo);
	private freelanceInfo = inject(FreelanceInfo);
	private professionalInfo = inject(ProfessionalInfo);

	ngOnInit(): void {
		this.freelanceExperience = this.freelanceInfo.getInfo();
		this.professionalExperience = this.professionalInfo.getInfo();
		this.education = this.educationInfo.getInfo();
	}
}
