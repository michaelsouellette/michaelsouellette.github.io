export class IJob {
	public company: string;
	public position: string;
	public startDate: string;
	public endDate: string;
	public description: string;

	constructor(
		company: string,
		position: string,
		startDate: string,
		endDate: string,
		description: string
	) {
		this.company = company;
		this.position = position;
		this.startDate = startDate;
		this.endDate = endDate;
		this.description = description;
	}
}

export class IEducation {
	public company: string;
	public startYear: number;
	public endYear: number;
	public description: string;

	constructor(
		company: string,
		startYear: number,
		endYear: number,
		description: string
	) {
		this.company = company;
		this.startYear = startYear;
		this.endYear = endYear;
		this.description = description;
	}
}
