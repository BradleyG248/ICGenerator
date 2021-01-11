import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollCardComponent } from './poll-card/poll-card.component';
import { MakepollComponent } from './makepoll/makepoll.component';
import { QuestionComponent } from './question/question.component';
import { QuestionOptionComponent } from './question-option/question-option.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PollCardComponent,
    MakepollComponent,
    QuestionComponent,
    QuestionOptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
