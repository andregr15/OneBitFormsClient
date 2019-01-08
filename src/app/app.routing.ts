import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AngularTokenService } from 'angular-token';

import { FormListComponent } from './forms/form-list/form-list.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { AnswerNewComponent } from './answers/answer-new/answer-new.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { AnswerSubmitedComponent } from './answers/answer-submited/answer-submited.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';


const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'forgot_password', component: ForgotPasswordComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reset_password', component: ResetPasswordComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forms', component: FormListComponent, canActivate: [AngularTokenService] },
    { path: 'forms/new', component: FormEditComponent, canActivate: [AngularTokenService] },
    { path: 'forms/:id', component: FormEditComponent, canActivate: [AngularTokenService] },
    { path: 'answers/submited/:id', component: AnswerSubmitedComponent },
    { path: 'answers/:id/new', component: AnswerNewComponent },
    { path: 'answers/:id', component: AnswerListComponent, canActivate: [AngularTokenService] },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);