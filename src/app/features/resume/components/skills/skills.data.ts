import { IResumeSkills } from './skills.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ResumeSkills {
	public skills: IResumeSkills[] = [];

	constructor() {
		this.skills.push(new IResumeSkills('Angular', 5));
		this.skills.push(new IResumeSkills('TypeScript', 5));
		this.skills.push(new IResumeSkills('React', 3));
		this.skills.push(new IResumeSkills('Node.js', 4.5));
		this.skills.push(new IResumeSkills('Express', 4));
		this.skills.push(new IResumeSkills('MEAN', 4));
		this.skills.push(new IResumeSkills('M*EAN', 4));
		this.skills.push(new IResumeSkills('HTML 5', 5));
		this.skills.push(new IResumeSkills('CSS', 5));
		this.skills.push(new IResumeSkills('Sass', 5));
		this.skills.push(new IResumeSkills('React', 3));
		this.skills.push(new IResumeSkills('Javascript', 5));
		this.skills.push(new IResumeSkills('git', 5));
		this.skills.push(new IResumeSkills('Redis', 4.5));
		this.skills.push(new IResumeSkills('SQL', 4));
		this.skills.push(new IResumeSkills('MySQL', 4));
		this.skills.push(new IResumeSkills('NoSQL', 4));
		this.skills.push(new IResumeSkills('NPM', 4));
		this.skills.push(new IResumeSkills('Bootstrap', 4.5));
		this.skills.push(new IResumeSkills('Webpack', 3.5));
		this.skills.push(new IResumeSkills('JSON', 5));
		this.skills.push(new IResumeSkills('Python', 2));
		this.skills.push(new IResumeSkills('PHP', 3));
		this.skills.push(new IResumeSkills('jQuery', 4));
		this.skills.push(new IResumeSkills('WordPress', 3.5));
		this.skills.push(new IResumeSkills('Google Cloud', 3.5));
		this.skills.push(new IResumeSkills('AWS', 3.5));
		this.skills.push(new IResumeSkills('Azure', 4));
		this.skills.push(new IResumeSkills('Jira', 4));
		this.skills.push(new IResumeSkills('XML', 4));
		this.skills.push(new IResumeSkills('IBM WebSphere Commerce', 2));
		this.skills.push(new IResumeSkills('PhotoShop', 2));
	}

	public getInfo() {
		return this.skills;
	}
}
