import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { MzToastService } from 'ngx-materialize';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public login: string;

  private token: string;

  constructor(
    private tokenService: AngularTokenService,
    private toastService: MzToastService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.tokenService.resetPassword({
      login: this.login
    }).subscribe(
      res => {
        this.toastService.show(res.message, 8000, 'green')
        console.log(this.tokenService);
      },
      error => this.toastService.show(error.message, 8000, 'red lighten-1')
    );
  }

}
