import { Component, OnInit } from '@angular/core';

import { LoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginSuccess: boolean = false;
  user: string = '';
  password: string = '';
  errorUser: boolean = false;
  errorPassword: boolean = false;
  response: string = null;

  constructor(private loginService: LoginService) { };

  ngOnInit() {
  }

  onKeyUser(){
    if(this.user.length > 0){
      this.errorUser= false;
    }
  }

  onKeyPassword() {
    if(this.password.length > 0){
      this.errorPassword= false;
    }
  }

  login() {
    this.loginService.loginUser(this.user, this.password).subscribe(
      data => {
        this.response = data;
        this.checkLogin();
      },
      error => {
        this.errorUser = true;
        this.user = '';
        this.errorPassword = true;
        this.password = '';
        this.response = null;
      }
    );
  }

  checkLogin() {
    if (this.response !== null) {
      sessionStorage.setItem('userCall', this.response);
      this.loginSuccess = true;
    } else {
      this.errorUser = true;
      this.user = '';
      this.errorPassword = true;
      this.password = '';
      this.response = null;
    }
  }

}
