import { Skill } from './skills.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillsInfo {
	public skills: Skill[] = [];

	constructor() {
		this.skills.push(new Skill('Angular', 'angular-plain.svg'));
		this.skills.push(new Skill('Node.js', 'nodejs-plain.svg'));
		this.skills.push(new Skill('React', 'react.svg'));
		this.skills.push(new Skill('TypeScript', 'typescript-plain.svg'));
		this.skills.push(new Skill('HTML 5', 'html5-plain.svg'));
		this.skills.push(new Skill('CSS 3', 'css3-plain.svg'));
		this.skills.push(new Skill('Sass', 'sass-original.svg'));
		this.skills.push(new Skill('Javascript', 'javascript-plain.svg'));
		this.skills.push(new Skill('git', 'git-plain.svg'));
		this.skills.push(new Skill('Redis', 'redis-plain.svg'));
		this.skills.push(new Skill('MySQL', 'mysql-plain.svg'));
		this.skills.push(new Skill('MongoDB', 'mongodb-plain.svg'));
		this.skills.push(new Skill('NPM', 'npm-original-wordmark.svg'));
		this.skills.push(new Skill('Webpack', 'webpack-plain.svg'));
		this.skills.push(new Skill('Wordpress', 'wordpress-plain.svg'));
		this.skills.push(new Skill('Bootstrap', 'bootstrap-plain.svg'));
		this.skills.push(new Skill('Python', 'python-plain.svg'));
		this.skills.push(new Skill('PHP', 'php-plain.svg'));
	}

	public getInfo() {
		return this.skills;
	}
}
