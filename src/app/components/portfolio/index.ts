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
      slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};

      constructor(private wordpress: WordpressService) { }

      ngOnInit(): void {
            this.wordpress.get('wp/v2/portfolio').then(data => {
                  console.log(data);
                  for(let i = 0; i < data['length']; i++) {
                        if(data[i]['featured_media']) {
                              console.log(data[i]['featured_media']);
                              this.wordpress.media(data[i]['featured_media']).then(mediaData => {
                                    data[i].image = mediaData;
                              });
                        }
                  }
                  this.portfolioData = data;
            });
      }
}
