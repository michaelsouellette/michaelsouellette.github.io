import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionComponent } from './position.component';
import { IPosition } from './position.model';

describe('PositionComponent', () => {
	let component: PositionComponent;
	let fixture: ComponentFixture<PositionComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [ PositionComponent ],
			schemas: [NO_ERRORS_SCHEMA]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PositionComponent);
		component = fixture.componentInstance;
		component.data = new IPosition('Company', '2020', '2021', 'Description', 'Engineer', 'https://example.com');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
