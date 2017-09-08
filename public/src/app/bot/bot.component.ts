import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css'],
  providers:[ApiService],
})
export class BotComponent{
  getData: string;
  postData: string;
  results: any[];
  newInput: Object = {};

    constructor(private _apiService:ApiService) { }
    // onTestGet(){
    //   this._apiService.getData()
    //   .subscribe(
    //     data=> this.getData = JSON.stringify(data),
    //     error=> alert(error),
    //     () => console.log("finished")
    //   )
    // }

      onTestGet(newInput){
        this._apiService.getData(newInput.input)
          .subscribe(
            data=>
            // {this.results = data['results'];}
            this.getData= JSON.stringify(data),
            error=> alert(error),
            () => console.log("finished")
          )
        }
}
