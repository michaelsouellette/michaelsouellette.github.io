import { IPosition } from '../position/position.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EducationInfo {
	public education: IPosition[] = [];

	constructor() {
		this.education.push(new IPosition(
			'Penn State Erie, The Behrend College',
			'2005',
			'2009',
			'Bachelor of Science (B.S.) in Business Management and Management Information Systems'
		));
		this.education.push(new IPosition(
			'Coudersport Jr./Sr. High School',
			'2000',
			'2005',
			'High School Diploma'
		));
	}

	public getInfo() {
		return this.education;
	}
}

@Injectable()
export class FreelanceInfo {
	public jobs: IPosition[] = [];
	private jobTitle = 'Freelance Web Developer';

	constructor() {
		this.jobs.push(new IPosition(
			`Rod's Welding`,
			'07/2001',
			'Present',
			'Designed site layout; enhanced user experience; created graphics and content to enhance site appearance; search engine optimization; innovated back end system to manage company sales;  tracked trends and metrics in Google Analytics.',
			this.jobTitle,
			'http://www.rodswelding.com/'
		));
		this.jobs.push(new IPosition(
			`Jack Brice on Wine`,
			'03/2014',
			'03/2015',
			'Design new site layout; creation of a custom WordPress theme; development of a responsive site; moved site from WordPress.com to a hosted version; improve user site experience; create graphics and content to enhance site aesthetic; and search engine optimization.',
			this.jobTitle,
			'https://www.jackbricewine.com/'
		));
		this.jobs.push(new IPosition(
			`Off-the-Grid`,
			'11/2012',
			'03/2015',
			'Design new site layout; creation of a custom WordPress theme; development of a responsive site; improve user site experience; create graphics and content to enhance site aesthetic; and search engine optimization.',
			this.jobTitle,
			'https://off-the-grid.ws/'
		));
		this.jobs.push(new IPosition(
			`Pittsburgh Water Limo`,
			'05/2010',
			'11/2012',
			'Designed site layout; enhanced user experience; created graphics and content to enhance site appearance; developed e-commerce solution using PayPal APIs; search engine optimization; built MySQL database for easy site maintenance; innovated back end system to manage company sales;  tracked trends and metrics in Google Analytics.',
			this.jobTitle
		));
		this.jobs.push(new IPosition(
			`WineMakingTalk.com`,
			'04/2010',
			'12/2012',
			'Utilized Google Maps API and mySQL to develop map and database of locations for web community; used jQuery and CSS3 to build an interactive user experience.',
			this.jobTitle
		));
	}

	public getInfo() {
		return this.jobs;
	}
}

@Injectable()
export class ProfessionalInfo {
	public jobs: IPosition[] = [];

	constructor() {
		this.jobs.push(new IPosition(
			`DICK's Sporting Goods`,
			'06/2021',
			'Present',
			'Managing the software engineers for the Product Discovery/Top of Funnel product team; leading development of corporate design system for both Angular and React frameworks; design high level software architecture guides for new projects; enable cross teams collaboration in the technology space.',
			'Software Engineering Manager - Top of Funnel',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new IPosition(
			`DICK's Sporting Goods`,
			'10/2019',
			'09/2021',
			'Managing the software engineers for the Customer Engagement product team; managed the development of an in-house marketing content management system; design high level software architecture guides for new projects; enable cross teams collaboration in the technology space; leading development of corporate design system.',
			'Software Engineering Manager - Customer Engagement',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new IPosition(
			`DICK's Sporting Goods`,
			'11/2018',
			'10/2019',
			'Guided an engineering team in the creation of an in-house marketing content management system (CMS); grew the use of the CMS to the most called API on the site; enabled site content and marketing teams the ability to react quickly to the market place; helped in establishing many guidelines for the growth of Angular applications within the organization; guided the largest sections of marketing content from legacy systems to newer and more scalable approaches.',
			'Senior Software Engineer',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new IPosition(
			`DICK's Sporting Goods`,
			'02/2018',
			'11/2018',
			'Lead a team of front-end developers in the creation of marketing assets for the e-commerce storefront; helped in the creation of tools to speed of business processes around site content; managed many large "instantaneous" site content shifts; worked with design teams in creating scalable and reusable content (sans CMS); managed the deprecation of legacy applications into newer processes.',
			'Senior Front-End Web Developer',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new IPosition(
			'Industry Weapon',
			'12/2015',
			'02/2018',
			`Creating interactive wireframes for web apps, using AngularJS, jQuery, HTML5, and Sass to create integrations for interactive digital signage; contributing in the development of a web app style framework for future digital signage development; developing Node.js and AngularJS based mobile applications for wayfinding in relation to digital signage; using WebSocket to create real-time queue management systems; creating interactive puzzles and games using modern web technologies for use on touchscreen displays.`,
			'Front-End Web Developer'
		));
		this.jobs.push(new IPosition(
			'Jawbone',
			'07/2013',
			'11/2015',
			'Developed growth initiatives around UP platform; responsive site development; rapid prototyping; full-stack development; lead development team in building of application; built web application using Python, AngularJS, HTML5, jQuery, and CSS3.',
			'Web Developer'
		));
		this.jobs.push(new IPosition(
			'BodyMedia',
			'03/2011',
			'07/2013',
			'Improved user site experience, improved site performance and load speed, designed and implemented website changes, e-commerce site development, JavaScript & jQuery programming, developed online pages and e-commerce through use of NetSuite software.',
			'Web Developer'
		));
	}

	public getInfo() {
		return this.jobs;
	}
}
