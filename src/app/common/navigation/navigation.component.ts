import { Component } from '@angular/core';

@Component({
	standalone: false,
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
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
}
