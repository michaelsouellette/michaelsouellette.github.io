import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPosition } from './position.model';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class PositionComponent implements OnInit {
	@Input() data: IPosition;

	constructor() { }

	ngOnInit(): void {
	}

}
