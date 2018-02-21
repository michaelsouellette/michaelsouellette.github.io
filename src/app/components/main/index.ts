import { Component, ViewEncapsulation } from '@angular/core';

/**
 * @title sidenav
 */
@Component({
      selector: 'main-component',
      templateUrl: './main.html',
      styleUrls: ['main.scss'],
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
})
export class MainComponent {
      title = "<span class='main'>M</span>ichael <span class='main'>O</span>uellette";
      subtitle = "Front-End Web Developer"
}
