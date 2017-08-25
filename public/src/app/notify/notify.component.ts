import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  user ={firstName:'', lastName:'', email:''}
  newUser = {};
  loginErrors = [];

  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit() {
    localStorage.removeItem('currentUser')
  }

//creating a new instance of user on submition
createUser(newUser){
  return this._userService.create(this.newUser)
  .then(user => {
    if(user.errors){
      //create front-end error messages
        console.log('ahhh fuck you fucked it up');
          for(let key in user.errors){
            let error = user.errors[key];
            this.loginErrors.push(error.message);
          }
    } 
    else {
      console.log(user);
      this._userService.create(user);
      // console.log(user.name);
      //redirect to answer-board
      this.router.navigateByUrl('dashboard')
    }
  })
  .catch(err => console.log(err));
}
}
