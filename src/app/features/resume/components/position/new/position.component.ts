import { Component, input } from '@angular/core';

import { PositionNew } from '../position.model';

@Component({
	standalone: false,
	selector: 'app-position-new',
	templateUrl: './position.component.html',
	styleUrl: '../position.component.scss'
})
export class PositionNewComponent {
	data = input.required<PositionNew>();
}
