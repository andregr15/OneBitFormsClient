import { Component, OnInit } from '@angular/core';
import { AngularTokenService, SignInData } from 'angular-token';
import { MzToastService } from 'ngx-materialize';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _signInData: SignInData = <SignInData> {};

  constructor(
    private tokenService: AngularTokenService,
    private toastService: MzToastService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.tokenService.signIn(this._signInData).subscribe(
      res => {
        this.router.navigate(['/forms']);
      },
      error => {
        this._signInData = <SignInData>{};
        console.log(error._body);
        
        if(error.status == 0) {
          for(const message of JSON.parse(error._body)['errors']) {
            this.toastService.show(message, 8000, 'red');
          }
        }
        else {
          this.toastService.show('Connection Error', 8000, 'red');
        }
      }
    );
  }

}
