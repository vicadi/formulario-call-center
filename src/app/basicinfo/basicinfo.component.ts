import { Component, OnInit } from '@angular/core';
import { BasicInfo } from './basicinfo';
import { FormsModule, ControlValueAccessor } from '@angular/forms';

import { ChangeDetectorRef } from '@angular/core';




@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})

export class BasicinfoComponent implements OnInit{
  model = new BasicInfo('','','','','','','','','','');
  
  birthDay = '';
  birthMonth = '';
  birthYear = '';
  
  checkNFijo = false;
  
  showButton:boolean = false;
  
  showBasicInfo:boolean = true;
  showFinancialInfo:boolean = false;
  
  error = true;
  errorMessage = '';

  daysList = [];
  monthList = [];
  yearList = [];
  
  errorMessageFirstName1 = '';
  showErrorFirstName1 = false;
  
  errorMessageFirstName2 = '';
  showErrorFirstName2 = false;
  
  showErrorLastName1:boolean = false;
  errorMessageLastName1 = '';

  showErrorLastName2:boolean = false;
  errorMessageLastName2 = '';
  
  constructor() {
    
  }

  ngOnInit() {
    this.daysList = Array(31).fill(0).map((x,i)=>i+1);
    this.monthList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];
    this.yearList = Array(69).fill(0).map((x,i)=>i+1950);
  }
  
  checkS(value):boolean{    
    if(!value.match(/[^a-zA-ZñÑ\s]+/g)){
      return true;
    }else{
      return false;
    }
  } 
  
  checkEmail(value):boolean{
    if(value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/g)){
      return true;
    }else{
      return false;
    }
  }
  
  submitted = false;
  onSubmit() { this.submitted = true; }
  
  checkRequiredValues():boolean {
    var check:boolean = true;
  
    if(this.model.firstName2 != ''){
        if(!this.checkS(this.model.firstName2)){
          check = false;
          this.errorMessage = 'El campo de segundo nombre solo puede contener letras (A-Z) y espacios';
        }
        if(this.model.firstName2.length < 3){
          check = false;
          this.errorMessage = 'El campo de segundo nombre tiene que tener mas de 3 letras';
        }
      }
      if(this.model.lastName2 != ''){
        if(!this.checkS(this.model.lastName2)){
          check = false;
          this.errorMessage = 'El campo de segundo apellido solo puede contener letras (A-Z) y espacios';
        }
        if(this.model.lastName2.length < 3){
          check = false;
          this.errorMessage = 'El campo de segundo apellido tiene que tener mas de 3 letras';
        }
      }
      
      if(this.model.idNumber.length < 6 ){
        check = false;
        this.errorMessage = 'El campo de cedula tiene que tener mas de 6 numeros';
      }
      
      if(this.model.birthDay == '' || this.model.birthMonth == '' || this.model.birthYear == ''){
        check = false;
        this.errorMessage = 'El campo de fecha de nacimiento es obligatoria';
      }
      
      if(this.model.email == ''){
        check = false;
        this.errorMessage = 'El campo de correo electronico es obligatorio';
      }else if(!this.checkEmail(this.model.email)){
        check = false;
        this.errorMessage = 'El campo de correo electronico es incorrecto';
      }
      
      if(this.model.phoneNumber == ''){
        check = false;
        this.errorMessage = 'El campo de número telefonico es obligatorio';
      }else if(this.checkNFijo){
        if(this.model.phoneNumber.length != 7){
          check = false;
          this.errorMessage = 'Si el número es fijo debe tener 7 números';
        }
      }else if (!this.checkNFijo){
        if(this.model.phoneNumber.length != 10){
          check = false;
          this.errorMessage = 'Si el número es celular debe tener 10 números';
        }else if(this.model.phoneNumber.charAt(0) != '3'){
          check = false;
          this.errorMessage = 'Si el número es celular debe empezar contener un indicativo con rango entre 300 y 399';
        }
      }
  
    return check;
  }
  
  validateFirstName1():boolean{
    var value = this.model.firstName1;
    
    if(value == ''){
      this.showErrorFirstName1 = true;
      this.errorMessageFirstName1 = 'El campo de primer nombre es obligatorio';
    }else if(value.length < 3){
      this.showErrorFirstName1 = true;
      this.errorMessageFirstName1 = 'El campo de primer nombre tiene que tener mas de 3 letras';
    }else if(!this.checkS(value)){
      this.showErrorFirstName1 = true;
      this.errorMessageFirstName1 = 'El campo de primer nombre solo puede contener letras (A-Z) y espacios';
    }else{
      this.showErrorFirstName1 = false;
      this.errorMessageFirstName1 = '';
    }
    return this.showErrorFirstName1;
  }
  
  validateFirstName2():boolean{
    var value = this.model.firstName2;
    
    if(value != ''){
      if(value.length < 3){
        this.showErrorFirstName2 = true;
        this.errorMessageFirstName2 = 'El campo de segundo nombre tiene que tener mas de 3 letras';
      }else if(!this.checkS(value)){
        this.showErrorFirstName2 = true;
        this.errorMessageFirstName2 = 'El campo de segundo nombre solo puede contener letras (A-Z) y espacios';
      }else{
        this.showErrorFirstName2 = false;
        this.errorMessageFirstName2 = '';
      }
    }
    return this.showErrorFirstName2;
  }
  
  validateLastName1():boolean{
    var value = this.model.lastName1;
    
    if(value == ''){
      this.showErrorLastName1 = true;
      this.errorMessageLastName1 = 'El campo de primer apellido es obligatorio';
    }else if(value.length < 3){
      this.showErrorLastName1 = true;
      this.errorMessageLastName1 = 'El campo de primer apellido tiene que tener mas de 3 letras';
    }else if(!this.checkS(value)){
      this.showErrorLastName1 = true;
      this.errorMessageLastName1 = 'El campo de primer apellido solo puede contener letras (A-Z) y espacios';
    }else{
      this.showErrorLastName1 = false;
      this.errorMessageLastName1 = '';
    }
    return this.showErrorLastName1;
  }
  
  validateLastName2():boolean{
    var value = this.model.lastName2;
    
    if(value != ''){
      if(value.length < 3){
        this.showErrorLastName2 = true;
        this.errorMessageLastName2 = 'El campo de segundo apellido tiene que tener mas de 3 letras';
      }else if(!this.checkS(value)){
        this.showErrorLastName2 = true;
        this.errorMessageLastName2 = 'El campo de segundo apellido solo puede contener letras (A-Z) y espacios';
      }else{
        this.showErrorLastName2 = false;
        this.errorMessageLastName2 = '';
      }
    }
    return this.showErrorLastName2;
  }
  
  
  finish():void{
    this.showBasicInfo = false;
    this.showFinancialInfo = true;
  }
  
}
