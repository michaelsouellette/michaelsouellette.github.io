import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-no-content',
    templateUrl: './no-content.component.html',
    styleUrls: ['./no-content.component.scss'],
    standalone: false
})
export class NoContentComponent implements OnInit {
	path = '/';

	constructor() { }

	ngOnInit(): void { }

}
