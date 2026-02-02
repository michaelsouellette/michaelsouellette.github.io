import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../features/home/home.component';
import { AboutComponent } from '../features/about/about.component';
import { SkillsComponent } from '../features/skills/skills.component';
import { ResumeComponent } from '../features/resume/resume.component';
import { ContactComponent } from '../features/contact/contact.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    standalone: true,
    imports: [CommonModule, HomeComponent, AboutComponent, SkillsComponent, ResumeComponent, ContactComponent]
})
export class MainComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}
}
