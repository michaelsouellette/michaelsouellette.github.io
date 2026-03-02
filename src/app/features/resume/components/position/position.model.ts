export class Position {
	public company: string;
	public startDate: string;
	public endDate: string;
	public description: string;
	public position: string | undefined;
	public companyLink: string | undefined;

	constructor(
		company: string,
		startDate: string,
		endDate: string,
		description: string,
		position?: string,
		companyLink?: string
	) {
		this.company = company;
		this.startDate = startDate;
		this.endDate = endDate;
		this.description = description;
		this.position = position;
		this.companyLink = companyLink;
	}
}

export class PositionNew {
	public company: string;
	public startDate: string;
	public endDate: string;
	public description: string[];
	public position: string | undefined;
	public companyLink: string | undefined;

	constructor(
		company: string,
		startDate: string,
		endDate: string,
		description: string[],
		position?: string,
		companyLink?: string
	) {
		this.company = company;
		this.startDate = startDate;
		this.endDate = endDate;
		this.description = description;
		this.position = position;
		this.companyLink = companyLink;
	}
}
