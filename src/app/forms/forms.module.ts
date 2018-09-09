import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ActiveComponent } from './shared/active/active.component';

import { MaterializeModule } from 'ngx-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routing } from './../app.routing';
import { FormsModule as CoreFormsModule } from '@angular/forms';
import { FormFormComponent } from './form-form/form-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';

import { ColorPickerModule } from 'ngx-color-picker';

import { MzSelectModule } from 'ngx-materialize';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    routing,
    CoreFormsModule,
    RouterModule,
    ColorPickerModule,
    MzSelectModule
  ],
  exports: [
    FormListComponent
  ],
  declarations: [FormListComponent, FormEditComponent, ActiveComponent, FormFormComponent, QuestionListComponent, QuestionFormComponent]
})
export class FormsModule { }
