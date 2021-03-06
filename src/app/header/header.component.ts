import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { MzToastService }  from 'ngx-materialize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenService: AngularTokenService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
    //this.tokenService.validateToken().subscribe();
  }

  logged() {
    return this.tokenService.userSignedIn() && this.tokenService.currentUserData != null;
  }

  signOut() {
    this.tokenService.signOut().subscribe(
      success => { 
        console.log(success);
      },
      error => {
        console.log(error);
        this.toastService.show('Error in Logout', 8000, 'red lighten-1');
      }
    )
  }

  userLogedIn(): boolean {
    console.log(this.tokenService.userSignedIn() && this.tokenService.currentUserData != null)
    return this.tokenService.userSignedIn() && this.tokenService.currentUserData != null;
  }

}
