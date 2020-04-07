import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public socialIcons = [
		{
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/michaelouellette/',
			icon: 'linkedin'
		},
		{
			title: 'GitHub',
			link: 'https://github.com/michaelsouellette',
			icon: 'github'
		},
		{
			title: 'Instagram',
			link: 'https://www.instagram.com/michaelsouellette/',
			icon: 'instagram'
		},
		{
			title: 'Twitter',
			link: 'https://twitter.com/mikesouellette',
			icon: 'twitter'
		}
	];

	constructor() { }

	ngOnInit() { }

}
