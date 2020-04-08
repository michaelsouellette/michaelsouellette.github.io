import { IResumeSkills } from './skills.model';

export class ResumeSkills {
	public skills: IResumeSkills[] = [];

	constructor() {
		this.skills.push(new IResumeSkills('Angular', 5));
		this.skills.push(new IResumeSkills('Node.js', 4.5));
		this.skills.push(new IResumeSkills('HTML 5', 5));
		this.skills.push(new IResumeSkills('CSS 3', 5));
		this.skills.push(new IResumeSkills('TypeScript', 4));
		this.skills.push(new IResumeSkills('Javascript', 5));
		this.skills.push(new IResumeSkills('SQL', 4));
		this.skills.push(new IResumeSkills('NoSQL', 4));
		this.skills.push(new IResumeSkills('Redis', 4));
		this.skills.push(new IResumeSkills('Bootstrap', 4.5));
		this.skills.push(new IResumeSkills('Sass', 5));
		this.skills.push(new IResumeSkills('JSON', 5));
		this.skills.push(new IResumeSkills('GIT', 5));
		this.skills.push(new IResumeSkills('Python', 2));
		this.skills.push(new IResumeSkills('PHP', 3));
		this.skills.push(new IResumeSkills('Webpack', 3.5));
		this.skills.push(new IResumeSkills('Gulp', 3.5));
		this.skills.push(new IResumeSkills('jQuery', 4));
		this.skills.push(new IResumeSkills('NPM', 4));
		this.skills.push(new IResumeSkills('WordPress', 5));
		this.skills.push(new IResumeSkills('Google Cloud', 3.5));
		this.skills.push(new IResumeSkills('AWS', 3.5));
		this.skills.push(new IResumeSkills('Azure', 3.5));
		this.skills.push(new IResumeSkills('Jira', 4));
		this.skills.push(new IResumeSkills('XML', 4));
		this.skills.push(new IResumeSkills('IBM WebSphere Commerce', 3));
		this.skills.push(new IResumeSkills('NetSuite', 3));
		this.skills.push(new IResumeSkills('Sketch', 3));
		this.skills.push(new IResumeSkills('PhotoShop', 2));
	}

	public getInfo() {
		return this.skills;
	}
}
