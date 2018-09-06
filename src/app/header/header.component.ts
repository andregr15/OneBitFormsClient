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
  }

  signOut() {
    this.tokenService.signOut().subscribe(
      success => { 
      },
      error => {
        console.log(error);
        this.toastService.show('Error in Logout', 8000, 'red lighten-1');
      }
    )
  }

}
