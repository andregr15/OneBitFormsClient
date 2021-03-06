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
      success => {
        // added to solve the login - logout exibition problem
        this.tokenService.validateToken().subscribe();
        this.router.navigate(['/forms']);
      },
      error => {
        this._signInData = <SignInData>{};
        console.log(error._body);
        
        if(error.status !== 0) 
          for(const message of error.error.errors)
            this.toastService.show(message, 8000, 'red lighten-1');
        else 
          this.toastService.show('Connection Error', 8000, 'red lighten-1');
      }
    );
  }

}
