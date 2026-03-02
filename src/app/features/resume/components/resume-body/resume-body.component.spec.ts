import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBodyComponent } from './resume-body.component';

describe('ResumeBodyComponent', () => {
	let component: ResumeBodyComponent;
	let fixture: ComponentFixture<ResumeBodyComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [ ResumeBodyComponent ],
			schemas: [NO_ERRORS_SCHEMA]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ResumeBodyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
