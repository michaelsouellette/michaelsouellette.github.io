import { Injectable } from '@angular/core';
import { ResumeSkill } from './skills.model';

@Injectable()
export class ResumeSkills {
	public skills: ResumeSkill[] = [];

	constructor() {
		this.skills.push(new ResumeSkill('Angular', 5));
		this.skills.push(new ResumeSkill('TypeScript', 5));
		this.skills.push(new ResumeSkill('React', 3.5));
		this.skills.push(new ResumeSkill('Web Components', 4));
		this.skills.push(new ResumeSkill('Node.js', 4.5));
		this.skills.push(new ResumeSkill('Express', 4));
		this.skills.push(new ResumeSkill('HTML 5', 5));
		this.skills.push(new ResumeSkill('CSS', 5));
		this.skills.push(new ResumeSkill('Sass', 5));
		this.skills.push(new ResumeSkill('Javascript', 5));
		this.skills.push(new ResumeSkill('GitHub Actions', 4.5));
		this.skills.push(new ResumeSkill('git', 5));
		this.skills.push(new ResumeSkill('Vite', 4.5));
		this.skills.push(new ResumeSkill('Webpack', 4.5));
		this.skills.push(new ResumeSkill('NX', 4));
		this.skills.push(new ResumeSkill('NPM', 4));
		this.skills.push(new ResumeSkill('Storybook', 4));
		this.skills.push(new ResumeSkill('Bootstrap', 4.5));
		this.skills.push(new ResumeSkill('MySQL', 4));
		this.skills.push(new ResumeSkill('MongoDB', 3.5));
		this.skills.push(new ResumeSkill('Redis', 4.5));
		this.skills.push(new ResumeSkill('Python', 3));
		this.skills.push(new ResumeSkill('Azure', 4));
		this.skills.push(new ResumeSkill('Google Cloud', 3.5));
		this.skills.push(new ResumeSkill('AWS', 3.5));
		this.skills.push(new ResumeSkill('WordPress', 3.5));
		this.skills.push(new ResumeSkill('Jira', 4));
		this.skills.push(new ResumeSkill('React Native', 2));
	}

	public getInfo() {
		return this.skills;
	}
}
