import { Component, Input, OnInit } from '@angular/core';

import { IPosition } from './position.model';

@Component({
	standalone: false,
	selector: 'app-position',
	templateUrl: './position.component.html',
	styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
	@Input() data: IPosition;

	constructor() { }

	ngOnInit(): void {
	}

}
