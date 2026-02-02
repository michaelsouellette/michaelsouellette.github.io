import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-no-content',
    templateUrl: './no-content.component.html',
    styleUrls: ['./no-content.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class NoContentComponent implements OnInit {
	path = '/';

	constructor() { }

	ngOnInit(): void { }

}
