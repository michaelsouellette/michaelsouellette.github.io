import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [CommonModule]
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
