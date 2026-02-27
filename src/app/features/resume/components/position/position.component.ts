import { Component, Input } from '@angular/core';

import { IPosition } from './position.model';

@Component({
	standalone: false,
	selector: 'app-position',
	templateUrl: './position.component.html',
	styleUrls: ['./position.component.scss']
})
export class PositionComponent {
	@Input() data: IPosition;

	constructor() { }

}
