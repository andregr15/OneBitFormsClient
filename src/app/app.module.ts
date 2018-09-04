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
    AnswersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
