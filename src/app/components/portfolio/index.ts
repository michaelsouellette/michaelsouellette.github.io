import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wordpress';

/**
 * @title sidenav
 */
@Component({
      selector: 'portfolio-component',
      templateUrl: './portfolio.html',
      styleUrls: ['portfolio.scss'],
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
})
export class PortfolioComponent implements OnInit {
      portfolioData = {};
      flexWidth = "30%";

      constructor(private wordpress: WordpressService) {

      }

      ngOnInit(): void {
            this.wordpress.get('wp/v2/portfolio').then(data => {
                  console.log(data);
                  this.portfolioData = data;
            });
      }
}
