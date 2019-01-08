import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tokenService: AngularTokenService) { }

  ngOnInit() {
    //this.tokenService.validateToken().subscribe(res => console.log(res))
    this.route.queryParams.subscribe(
      params => {
        console.log(params);
        console.log(localStorage.getItem('accessToken'));
        console.log(localStorage.getItem('expiry'));

      }
    )
  }

}
