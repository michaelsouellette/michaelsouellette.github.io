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
      data = {};
      flexWidth = "30%";
      cardCount = Array.from(Array(5),(x,i)=>i);

      constructor(private wordpress: WordpressService) {

      }

      ngOnInit(): void {
            this.wordpress.get('wp/v2/pages').then(data => {
                  console.log(data);
                  this.data = data;
            });
      }
}
