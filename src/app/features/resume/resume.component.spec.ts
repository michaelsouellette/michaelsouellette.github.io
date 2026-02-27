import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';

@Component({ standalone: false, selector: 'app-resume-body', template: '' })
class ResumeBodyStub {}

@Component({ standalone: false, selector: 'app-skills', template: '' })
class SkillsStub {}

describe('ResumeComponent', () => {
	let component: ResumeComponent;
	let fixture: ComponentFixture<ResumeComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [ ResumeComponent, ResumeBodyStub, SkillsStub ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ResumeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
