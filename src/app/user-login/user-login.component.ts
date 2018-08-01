import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

  login(){
    if(this.user != undefined && this.user.length == 7){
      if(this.password != undefined && this.password.length >1 && this.password.length <= 9){
        this.validLogin();
      }else{
        this.password = '';
        this.errorPassword = true;
      }
    }else {
      this.errorUser = true;
      this.user='';
      this.password = '';
      this.errorPassword = true;
    }
  }

  validLogin(){
    if(this.user == 'cpazro2'){
      if(this.password  =='Bogota12'){
        sessionStorage.setItem('userCall', this.user)
        sessionStorage.setItem('passwordCall', this.password)
        this.loginSuccess = true;
      }else{
        this.errorPassword = true;
        this.password='';
      }
    }else {
      this.errorUser = true;
      this.user='';
      this.errorPassword = true;
      this.password='';
    }
  }
  
}
