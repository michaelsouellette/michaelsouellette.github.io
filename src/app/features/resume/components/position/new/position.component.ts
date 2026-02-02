import { Component, Input, OnInit } from '@angular/core';

import { IPositionNew } from '../position.model';

@Component({
    selector: 'app-position-new',
    templateUrl: './position.component.html',
    styleUrls: ['../position.component.scss'],
    standalone: false
})
export class PositionNewComponent implements OnInit {
	@Input() data: IPositionNew;

	constructor() { }

	ngOnInit(): void { }

}
