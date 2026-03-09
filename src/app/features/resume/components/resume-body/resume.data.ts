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
				'Architect and lead Homefield Design System from inception to production, delivering a token-based, multi-framework component library spanning React, Angular, React Native, and Web Components, adopted across internal and customer-facing applications enterprise-wide.',
				'Lead Web Foundations team driving large-scale frontend modernization and web performance optimization across NX monorepos, including framework upgrades, migration to Vite build tooling, and adoption of Angular hybrid SSR rendering — achieving 32–68% bundle size reductions and Core Web Vitals improvements of 18.7% LCP and 34.2% CLS.',
				'Lead and mentor a team of 22 engineers across eCommerce and marketing technology, managing direct reports and driving cross-team collaboration, knowledge sharing, and delivery alignment.',
				'Define and maintain technical roadmaps across multiple engineering teams, aligning frontend architecture investments with organizational priorities and long-term platform strategy.',
				'Champion accessibility and WCAG compliance standards across engineering teams, embedding ADA-compliant patterns into the Homefield Design System and establishing frontend accessibility guidelines adopted organization-wide.',
				'Leverage agile methodologies and analytics-driven insights to prioritize development initiatives, balancing user needs with business objectives.',
				'Implement A/B testing frameworks to evaluate feature performance and drive measurable improvements in key UX and conversion metrics.',
				'Manage development of an in-house marketing CMS, establishing foundational architecture for scheduled content delivery and dynamic customization.',
				'Design high-level software architecture for new initiatives, providing technical direction and scalable patterns for cross-functional teams.'
			],
			'Software Engineering Manager',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new PositionNew(
			`DICK's Sporting Goods`,
			'2018',
			'2019',
			[
				`Led engineering team in developing an in-house marketing CMS that became the site's most frequently called API, enabling content and marketing teams to respond rapidly to market changes.`,
				'Established Angular development guidelines and standards adopted across the engineering organization.',
				'Migrated significant marketing content from legacy systems to scalable, maintainable architecture.'
			],
			'Senior Software Engineer',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new PositionNew(
			`DICK's Sporting Goods`,
			'2018',
			'2018',
			[
				'Led front-end development team building eCommerce marketing assets and modernizing business processes.',
				'Managed transition and deprecation of legacy applications, replacing them with modern, scalable frontend architecture.'
			],
			'Senior Front-End Web Developer',
			'https://www.dickssportinggoods.com/'
		));
		this.jobs.push(new PositionNew(
			'Industry Weapon',
			'2015',
			'2018',
			[
				'Introduced AngularJS, HTML5, and Sass to the web application development team, modernizing the tech stack for interactive digital signage integrations.',
				'Built Node.js and AngularJS mobile apps for wayfinding, interactive touchscreen experiences, and real-time queue management via WebSocket.',
				'Designed interactive wireframes and developed CMS web applications for digital signage management.',
				'Led team strategy, conducted interviews, and hired and trained developers.'
			],
			'Front-End Web Developer'
		));
		this.jobs.push(new PositionNew(
			'Jawbone',
			'2013',
			'2015',
			[
				'Developed frontend for armband data collection integrating REST APIs using AngularJS, HTML5, Sass, and Node.js.',
				'Led development team for UP Food and Nutrition app, focusing on responsive design, rapid prototyping, and full-stack development.'
			],
			'Web Developer'
		));
		this.jobs.push(new PositionNew(
			'BodyMedia',
			'2011',
			'2013',
			[
				'Optimized site performance and user experience for a health-focused eCommerce platform.',
				'Developed eCommerce solutions and frontend enhancements using JavaScript and jQuery.'
			],
			'Web Developer'
		));
	}

	public getInfo() {
		return this.jobs;
	}
}
