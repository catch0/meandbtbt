import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {BotComponent} from './bot/bot.component';


const routes: Routes = [
   { path: '', pathMatch: 'full', component: LandingComponent},
   {path: 'bot',  component: BotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
