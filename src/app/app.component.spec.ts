import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@Component({ standalone: false, selector: 'app-navigation', template: '' })
class NavigationStub {}

@Component({ standalone: false, selector: 'app-footer', template: '' })
class FooterStub {}

describe('AppComponent', () => {
	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [RouterModule.forRoot([])],
			declarations: [AppComponent, NavigationStub, FooterStub]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});
});
