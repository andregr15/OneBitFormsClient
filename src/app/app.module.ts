import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'ngx-materialize';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    NgxChartsModule,
    FormsModule,
    AnswersModule,
    UsersModule,
    RouterModule,
    routing,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000/api/v1',
      signInRedirect: '/login'
    }),
    BrowserAnimationsModule
  ],
  providers: [AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
