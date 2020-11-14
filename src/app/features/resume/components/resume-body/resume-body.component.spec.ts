import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResumeBodyComponent } from './resume-body.component';

describe('ResumeBodyComponent', () => {
	let component: ResumeBodyComponent;
	let fixture: ComponentFixture<ResumeBodyComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ ResumeBodyComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ResumeBodyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
