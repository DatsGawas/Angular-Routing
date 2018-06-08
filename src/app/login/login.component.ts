/**
 * Created by dattaram on 19/4/18.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'login',
  template: `
<amexio-row>
  <amexio-column [size]="'3'">
  </amexio-column>
  <amexio-column [size]="'6'">
    <amexio-text-input [(ngModel)]="loginModel.userName" [field-label]="'User Name'" name ="name"
                       [place-holder]="'Enter user name'"
                       [icon-feedback]="true">
    </amexio-text-input>
    <amexio-password-input [(ngModel)]="loginModel.password" [field-label]="'Password'" name ="name"
                           [place-holder]="'Enter password'"
                           [icon-feedback]="true">
    </amexio-password-input>

    <amexio-button [label]="'Cancel'" [type]="'theme-color'" [tooltip]="'cancel'">
    </amexio-button>
    <amexio-button (onClick)="loginClick()" [label]="'Login'" [type]="'theme-color'" [tooltip]="'login'">
    </amexio-button>
  </amexio-column>
  <amexio-column [size]="'3'">
    
    <test [isTrue-tt]="testBoolean"></test>
  </amexio-column>
  
</amexio-row>
        `

})

export class LoginComponent implements OnInit {
  loginModel: LoginModel;
  testBoolean: boolean;
  constructor(private route: Router, private _cookieService: CookieService) {
    this.loginModel = new LoginModel();
  }

  ngOnInit() {
  }

  loginClick() {
    this.testBoolean = !this.testBoolean;
    /*if(this.loginModel.userName != '' && this.loginModel.password != '') {
      this._cookieService.set('username', this.loginModel.userName);
       this.route.navigate(['/home']);
    }*/

  }
}

export class LoginModel {
  userName: string;
  password: any;
  constructor() {
    this.userName = 'dats';
    this.password = 7675
  }
}
