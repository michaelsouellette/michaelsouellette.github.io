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
      flexWidth = "32%";

      constructor(private wordpress: WordpressService) { }

      ngOnInit(): void {
            this.wordpress.get('wp/v2/portfolio').then(data => {
                  console.log(data);
                  for(let i = 0; i <= data.length; i++) {
                        if(data[i]['featured_media']) {
                              data[i].image = this.getImage(data[i]['featured_media'])
                        }
                  }
                  this.portfolioData = data;


            });
      }

      getImage(id) {
            this.wordpress.media(id).then(mediaData => {
                  return mediaData['url'];
            });
      }
}
