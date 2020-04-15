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
			link: '#about'
		},
		{
			title: 'Tech',
			link: '#tech'
		},
		{
			title: 'Résumé',
			link: '#resume'
		},
		{
			title: 'Contact',
			link: '#contact'
		}
	];

	constructor() { }

	ngOnInit() { }

}
