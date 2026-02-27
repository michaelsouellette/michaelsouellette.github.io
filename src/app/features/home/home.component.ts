import { Component } from '@angular/core';

@Component({
	standalone: false,
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
			title: 'BlueSky',
			link: 'https://bsky.app/profile/michael.ouellette.dev',
			icon: 'at'
		}
	];

	constructor() { }


}
