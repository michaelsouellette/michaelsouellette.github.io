import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

@Component({ standalone: false, selector: 'app-home', template: '' })
class HomeStub {}

@Component({ standalone: false, selector: 'app-about', template: '' })
class AboutStub {}

@Component({ standalone: false, selector: 'app-skills', template: '' })
class SkillsStub {}

@Component({ standalone: false, selector: 'app-resume', template: '' })
class ResumeStub {}

@Component({ standalone: false, selector: 'app-contact', template: '' })
class ContactStub {}

describe('MainComponent', () => {
	let component: MainComponent;
	let fixture: ComponentFixture<MainComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [ MainComponent, HomeStub, AboutStub, SkillsStub, ResumeStub, ContactStub ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
