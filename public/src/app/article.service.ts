import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class ArticleService {

  constructor(private _http:Http) { }

getArticles(){
  console.log('hitting the article service');
  return this._http.get('/articles').map(data => data.json()).toPromise()
}

}
