import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';

//components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { BotComponent } from './bot/bot.component';
import { NotifyComponent } from './notify/notify.component';

//Services
import {UserService} from './user.service';
import {ArticleService} from './article.service';
import {ProofService} from './proof.service';
import {ApiService} from './api.service';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    BotComponent,
    NotifyComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
    ArticleService,
    ProofService,
    ApiService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
