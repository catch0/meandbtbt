import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';


@Injectable()
export class ApiService {

  constructor(private _http:Http) { }
  getArticles(search){
    console.log('getting article')
      return this._http.get(`http://debatebot-api.herokuapp.com/api/${search}`).map(data=>data.json()).toPromise()
  }

}
