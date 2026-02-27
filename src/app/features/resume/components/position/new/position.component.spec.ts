import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionNewComponent } from './position.component';
import { IPositionNew } from '../position.model';

describe('PositionNewComponent', () => {
	let component: PositionNewComponent;
	let fixture: ComponentFixture<PositionNewComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [ PositionNewComponent ],
			schemas: [NO_ERRORS_SCHEMA]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PositionNewComponent);
		component = fixture.componentInstance;
		component.data = new IPositionNew('Company', '2020', '2021', [], 'Engineer', 'https://example.com');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
