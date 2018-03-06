import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wordpress';

/**
 * @title sidenav
 */
@Component({
      selector: 'contact-component',
      templateUrl: './contact.html',
      styleUrls: ['contact.scss'],
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
})
export class ContactComponent implements OnInit {
      pageData: any;

      constructor(private wordpress: WordpressService) {

      }

      ngOnInit(): void {
            this.wordpress.get('wp/v2/pages/12').then(data => {
                  this.pageData = data;
            });
      }
}
