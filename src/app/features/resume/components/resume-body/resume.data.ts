import { Position, PositionNew } from '../position/position.model';

import { Injectable } from '@angular/core';

@Injectable()
export class EducationInfo {
	public education: Position[] = [];

	constructor() {
		this.education.push(new Position(
			'Penn State Erie, The Behrend College',
			'2005',
			'2009',
			'Bachelor of Science (B.S.) in Business Management and Management Information Systems'
		));
		this.education.push(new Position(
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
	public jobs: Position[] = [];
	private jobTitle = 'Freelance Web Developer';

	constructor() {
		this.jobs.push(new Position(
			`Rod's Welding`,
			'2001',
			'Present',
			'Designed site layout; enhanced user experience; created graphics and content to enhance site appearance; search engine optimization; innovated back end system to manage company sales;  tracked trends and metrics in Google Analytics.',
			this.jobTitle,
			'http://www.rodswelding.com/'
		));
		this.jobs.push(new Position(
			`Jack Brice on Wine`,
			'2014',
			'2015',
			'Design new site layout; creation of a custom WordPress theme; development of a responsive site; moved site from WordPress.com to a hosted version; improve user site experience; create graphics and content to enhance site aesthetic; and search engine optimization.',
			this.jobTitle,
			'https://www.jackbricewine.com/'
		));
		this.jobs.push(new Position(
			`Off-the-Grid`,
			'2012',
			'2015',
			'Design new site layout; creation of a custom WordPress theme; development of a responsive site; improve user site experience; create graphics and content to enhance site aesthetic; and search engine optimization.',
			this.jobTitle,
			'https://off-the-grid.ws/'
		));
		this.jobs.push(new Position(
			`Pittsburgh Water Limo`,
			'2010',
			'2012',
			'Designed site layout; enhanced user experience; created graphics and content to enhance site appearance; developed e-commerce solution using PayPal APIs; search engine optimization; built MySQL database for easy site maintenance; innovated back end system to manage company sales;  tracked trends and metrics in Google Analytics.',
			this.jobTitle
		));
		this.jobs.push(new Position(
			`WineMakingTalk.com`,
			'2010',
			'2012',
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
	public jobs: PositionNew[] = [];

	constructor() {
		this.jobs.push(new PositionNew(
			`DICK's Sporting Goods`,
			'2019',
			'Present',
			[
				'Leading and mentoring software engineering teams across both Search & Discovery and Customer Engagement domains, utilizing agile methodologies..',
				'Leveraging analytics-driven insights to inform and prioritize software development initiatives, ensuring alignment with user needs and business objectives.',
				'Spearheading the development of grassroots corporate design system for Angular and React frameworks.',
				'Implementing A/B testing methodologies to evaluate and optimize software features, enhancing user experience and driving measurable improvements in key performance metrics.',
				'Designing and implementing high-level software architecture guides for new initiatives.',
				'Managed process for the creation of an in-house marketing content management system, laying foundational work for scheduled content delivery and customization.',
				'Fostering cross-team collaboration and technology sharing initiatives to optimize project outcomes and knowledge transfer.'
			],
			'Software Engineering Manager',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new PositionNew(
			`DICK's Sporting Goods`,
			'2018',
			'2019',
			[
				'Led engineering team in developing an in-house marketing CMS, making it the site\'s most frequently called API.',
				'Through responsive web development practices and creation of CMS, empowered content and marketing teams to respond swiftly to market changes.',
				'Established guidelines for Angular application development and migrated significant marketing content from legacy to scalable systems.'
			],
			'Senior Software Engineer',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new PositionNew(
			`DICK's Sporting Goods`,
			'2018',
			'2018',
			[
				'Led front-end development team in creating e-commerce marketing assets and streamlining business process.',
				'Managed rapid content updates, collaborated with design teams on scalable content creation, and transitioned legacy applications to modern processes.',
				'Oversaw the transition and deprecation of legacy applications, implementing newer and more efficient processes.'
			],
			'Senior Front-End Web Developer',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new PositionNew(
			'Industry Weapon',
			'2015',
			'2018',
			[
				'Influential to web application development team, introducing AngularJS, jQuery, HTML5, and Sass for interactive digital signage integrations.',
				'Designed interactive wireframes and developed CMS web apps for digital signage management.',
				'Built Node.js and AngularJS-based mobile apps for wayfinding, interactive touchscreen puzzles and games.',
				'Implemented WebSocket for real-time queue management systems.',
				'Led team strategy meetings, conducted interviews, hired, and trained developers.',
				'Proactively troubleshot digital signage applications and developed preventive tools for future issues.'
			],
			'Front-End Web Developer'
		));
		this.jobs.push(new PositionNew(
			'Jawbone',
			'2013',
			'2015',
			[
				'Developed frontend for armband data collection using AngularJS, HTML5, Sass, and Node.js; integrated REST APIs and utilized Python with jinja templating to enhance the original application.',
				'Led development team for UP Food and Nutrition, focusing on responsive design, rapid prototyping, and full-stack development using Python, HTML5, jQuery, and Sass.'
			],
			'Web Developer'
		));
		this.jobs.push(new PositionNew(
			'BodyMedia',
			'2011',
			'2013',
			[
				'Enhanced user site experience and optimized site performance and load speed.',
				'Designed and executed website updates, focusing on e-commerce development.',
				'Utilized JavaScript and jQuery for programming enhancements.',
				'Developed online pages and e-commerce solutions using NetSuite software.'
			],
			'Web Developer'
		));
	}

	public getInfo() {
		return this.jobs;
	}
}
