import { Component, input } from '@angular/core';

import { Position } from './position.model';

@Component({
	standalone: false,
	selector: 'app-position',
	templateUrl: './position.component.html',
	styleUrl: './position.component.scss'
})
export class PositionComponent {
	data = input.required<Position>();
}
