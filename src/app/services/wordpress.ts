import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WordpressService {
      apiRoot: string = 'https://michaelouellette.com/wp-json/';
      results: any;
      loading: boolean;

      constructor(private http: HttpClient) {
            this.results = {};
            this.loading = false;
      }

      get(endpoint: string) {
            let promise = new Promise((resolve, reject) => {
                  this.http.get(this.apiRoot + endpoint)
                        .toPromise()
                        .then(res => { // Success
                              resolve(res);
                        },
                        msg => { // Error
                              reject(msg);
                        }
                  );
            });
            return promise;
      }

      media(id: string) {
            let promise = new Promise((resolve, reject) => {
                  this.http.get(`${this.apiRoot}wp/v2/media/${id}`)
                        .toPromise()
                        .then(res => { // Success
                              let returnData = {
                                    alt: res['alt_text'],
                                    url: res['source_url'],
                                    caption: res['caption']['rendered']
                              }
                              resolve(returnData);
                        },
                        msg => { // Error
                              reject(msg);
                        }
                  );
            });
            return promise;
      }
}
