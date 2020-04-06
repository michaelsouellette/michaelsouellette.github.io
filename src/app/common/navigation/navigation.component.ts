import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	public NAVIGATION = [
		{
			title: 'About',
			link: ''
		},
		{
			title: 'Skills',
			link: ''
		},
		{
			title: 'Résumé',
			link: ''
		},
		{
			title: 'Contact',
			link: ''
		},
	];

	constructor() { }

	ngOnInit() { }

}
