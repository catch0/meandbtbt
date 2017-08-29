import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent{
  claim: any = 'temp'; 

  // onSubmit(newUser){
  //   // console.log(newUser);
  //   // console.log('shit works');
  //   return this._api.getUser(newUser.username)
  //   .then(output =>{console.log(output)
  //     this.score = output.public_repos;
  //     ;})
  //   .catch(err =>{console.log(err);})


  constructor(private _api:ApiService) { }

  ngOnInit() {
  }

}
