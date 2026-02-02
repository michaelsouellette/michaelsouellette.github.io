import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeBodyComponent } from './components/resume-body/resume-body.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    standalone: true,
    imports: [CommonModule, ResumeBodyComponent, SkillsComponent]
})
export class ResumeComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}
