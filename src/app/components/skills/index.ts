import { Component, ViewEncapsulation } from '@angular/core';

/**
 * @title sidenav
 */
@Component({
      selector: 'skills-component',
      templateUrl: './skills.html',
      styleUrls: ['skills.scss'],
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
})
export class SkillsComponent {
      title = "Front-End Web Developer"
}
