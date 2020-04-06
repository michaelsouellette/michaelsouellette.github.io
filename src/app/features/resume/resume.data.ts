import { IEducation, IJob } from './resume.model';

export class EducationInfo {
	public education: IEducation[] = [];

	constructor() {
		this.education.push(new IEducation(
			'Penn State Erie, The Behrend College',
			2005,
			2009,
			'Bachelor of Science (B.S.) in Business Management and Management Information Systems'
		));
		this.education.push(new IEducation(
			'Coudersport Jr./Sr. High School',
			2000,
			2005,
			'High School Diploma'
		));
	}

	public getInfo() {
		return this.education;
	}
}

export class FreelanceInfo {
	public jobs: IJob[] = [];

	constructor() {}

	public getInfo() {
		return this.jobs;
	}
}

export class ProfessionalInfo {
	public jobs: IJob[] = [];

	constructor() {}

	public getInfo() {
		return this.jobs;
	}
}
