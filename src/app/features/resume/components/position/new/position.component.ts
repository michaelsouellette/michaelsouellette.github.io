import { Component, Input, OnInit } from '@angular/core';

import { IPositionNew } from '../position.model';

@Component({
	standalone: false,
	selector: 'app-position-new',
	templateUrl: './position.component.html',
	styleUrls: ['../position.component.scss']
})
export class PositionNewComponent implements OnInit {
	@Input() data: IPositionNew;

	constructor() { }

	ngOnInit(): void { }

}
