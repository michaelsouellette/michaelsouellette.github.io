import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPositionNew } from '../position.model';

@Component({
    selector: 'app-position-new',
    templateUrl: './position.component.html',
    styleUrls: ['../position.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class PositionNewComponent implements OnInit {
	@Input() data: IPositionNew;

	constructor() { }

	ngOnInit(): void { }

}
