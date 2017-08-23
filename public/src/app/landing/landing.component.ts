import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ArticleService} from '../article.service';
import {ProofService} from '../proof.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private _userService:UserService,
    private _proofService:ProofService,
  ) { }

  ngOnInit() {
  }

}
