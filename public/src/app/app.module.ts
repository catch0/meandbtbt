import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';

//components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

//Services
import {UserService} from './user.service';
import {ArticleService} from './article.service';
import {ProofService} from './proof.service';
import { NavComponent } from './nav/nav.component';
import { BotComponent } from './bot/bot.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    BotComponent
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
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
