import { Component, OnInit } from '@angular/core';

import { LoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginSuccess = false;
  user = '';
  password = '';
  errorUser = false;
  errorPassword = false;
  response: any = null;
  userName = null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.clearSession();
  }

  onKeyUser() {
    if (this.user.length > 0) {
      this.errorUser = false;
    }
  }

  onKeyPassword() {
    if (this.password.length > 0) {
      this.errorPassword = false;
    }
  }

  login() {
    this.loginService.loginUser(this.user, this.password).subscribe(
      data => {
        const response = JSON.parse(data._body);
        sessionStorage.setItem('userCall', response.name);
        sessionStorage.setItem('idUserCall', response.id);
        this.userName = response.username;
        this.loginSuccess = true;
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


  clearSession() {
    sessionStorage.clear();
  }
}
