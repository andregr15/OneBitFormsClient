import { Component, OnInit } from '@angular/core';
import { AngularTokenService, UpdatePasswordData } from 'angular-token';
import { MzToastService } from 'ngx-materialize';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private _updatePasswordData : UpdatePasswordData = <UpdatePasswordData> {};

  constructor(
    private tokenService : AngularTokenService, 
    private toastService: MzToastService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this._updatePasswordData.resetPasswordToken = params['token'];
        console.log(this._updatePasswordData.resetPasswordToken);
      }
    )
  }

  onSubmit() {
    this.tokenService.updatePassword(this._updatePasswordData).subscribe(
      success => {
        this.toastService.show(success.message, 8000, 'green lighten-1');
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.toastService.show('Error in reset password', 8000, 'red lighten-1');
      }
    )
  }

}
