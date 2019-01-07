import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { apiUrl } from './constants';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'ngx-materialize';
import { ColorPickerModule } from 'ngx-color-picker';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';
import { UsersModule } from './users/users.module';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularTokenModule } from 'angular-token';

import { FormService } from './shared/form.service';
import { QuestionService } from './shared/question.service';
import { AnswerService } from './answers/shared/answer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    FormsModule,
    AnswersModule,
    UsersModule,
    RouterModule,
    routing,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: apiUrl(),
      signInRedirect: '/login',
      signOutFailedValidate: true, 
      resetPasswordCallback: 'http://localhost:4200/reset_password'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    AngularTokenModule, 
    FormService,
    QuestionService,
    AnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
