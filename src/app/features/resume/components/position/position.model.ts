export class IPosition {
	public company: string;
	public startDate: string;
	public endDate: string;
	public description: string;
	public position: string;
	public companyLink: string;

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
