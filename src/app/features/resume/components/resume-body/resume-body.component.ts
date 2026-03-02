import { Component, inject } from '@angular/core';
import { EducationInfo, FreelanceInfo, ProfessionalInfo } from './resume.data';

@Component({
	standalone: false,
	selector: 'app-resume-body',
	templateUrl: './resume-body.component.html',
	styleUrl: './resume-body.component.scss',
	providers: [
		EducationInfo,
		FreelanceInfo,
		ProfessionalInfo
	]
})
export class ResumeBodyComponent {
	public freelanceExperience = inject(FreelanceInfo).getInfo();
	public professionalExperience = inject(ProfessionalInfo).getInfo();
	public education = inject(EducationInfo).getInfo();
}
