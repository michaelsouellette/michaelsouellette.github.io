import { ISkill } from './skills.model';
import { Injectable } from "@angular/core";

@Injectable()
export class SkillsInfo {
	public skills: ISkill[] = [];

	constructor() {
		this.skills.push(new ISkill('Angular', 'angular-plain.svg'));
		this.skills.push(new ISkill('Node.js', 'nodejs-plain.svg'));
		this.skills.push(new ISkill('HTML 5', 'html5-plain.svg'));
		this.skills.push(new ISkill('CSS 3', 'css3-plain.svg'));
		this.skills.push(new ISkill('Sass', 'sass-original.svg'));
		this.skills.push(new ISkill('TypeScript', 'typescript-plain.svg'));
		this.skills.push(new ISkill('Javascript', 'javascript-plain.svg'));
		this.skills.push(new ISkill('git', 'git-plain.svg'));
		this.skills.push(new ISkill('Redis', 'redis-plain.svg'));
		this.skills.push(new ISkill('MySQL', 'mysql-plain.svg'));
		this.skills.push(new ISkill('MongoDB', 'mongodb-plain.svg'));
		this.skills.push(new ISkill('Firebase', 'firebase.svg'));
		this.skills.push(new ISkill('NPM', 'npm-original-wordmark.svg'));
		this.skills.push(new ISkill('Webpack', 'webpack-plain.svg'));
		this.skills.push(new ISkill('Wordpress', 'wordpress-plain.svg'));
		this.skills.push(new ISkill('Bootstrap', 'bootstrap-plain.svg'));
		this.skills.push(new ISkill('Python', 'python-plain.svg'));
		this.skills.push(new ISkill('PHP', 'php-plain.svg'));
	}

	public getInfo() {
		return this.skills;
	}
}
