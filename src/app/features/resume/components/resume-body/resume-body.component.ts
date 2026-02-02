import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationInfo, FreelanceInfo, ProfessionalInfo } from './resume.data';
import { IPosition, IPositionNew } from '../position/position.model';
import { PositionComponent } from '../position/position.component';
import { PositionNewComponent } from '../position/new/position.component';

@Component({
    selector: 'app-resume-body',
    templateUrl: './resume-body.component.html',
    styleUrls: ['./resume-body.component.scss'],
    providers: [
        EducationInfo,
        FreelanceInfo,
        ProfessionalInfo
    ],
    standalone: true,
    imports: [CommonModule, PositionComponent, PositionNewComponent]
})
export class ResumeBodyComponent implements OnInit {
	public freelanceExperience: IPosition[] ;
	public professionalExperience: IPositionNew[];
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
