import { Component, inject } from '@angular/core';
import { EducationInfo, ProfessionalInfo } from './resume.data';

@Component({
	standalone: false,
	selector: 'app-resume-body',
	templateUrl: './resume-body.component.html',
	styleUrl: './resume-body.component.scss',
	providers: [
		EducationInfo,
		ProfessionalInfo
	]
})
export class ResumeBodyComponent {
	public professionalExperience = inject(ProfessionalInfo).getInfo();
	public education = inject(EducationInfo).getInfo();
}
