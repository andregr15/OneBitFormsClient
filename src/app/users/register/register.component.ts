import { Component, OnInit } from '@angular/core';
import { AngularTokenService, RegisterData } from 'angular-token';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  private _registerData: RegisterData = <RegisterData>{};

  constructor(
    private tokenService: AngularTokenService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  // Submiting the data to the api
  onSubmit() {
    this.tokenService.registerAccount(this._registerData).subscribe(
      success => {
        this._registerData = <RegisterData>{};
        this.toastService.show('Success, please confirm your Email', 8000, 'green');
      },
      error => {
        this._registerData = <RegisterData>{};
        if(error.status !== 0)
          for(const message of error.error.errors.full_messages)
            this.toastService.show(message, 8000, 'red lighten-1');
        else
          this.toastService.show('Connection Error', 8000, 'red lighten-1');
      }
    )
  }

}
