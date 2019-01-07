import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  private _login: string = '';

  constructor(
    private tokenService: AngularTokenService,
    private toastService: MzToastService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.tokenService.resetPassword({login: this._login}).subscribe(
      success => {
        this.toastService.show(success.message, 8000, 'green lighten-1');
      },
      error =>  {
        console.log(error);
        this.toastService.show(error.message, 8000, 'red lighten-1');
      }
    )
  }

}
