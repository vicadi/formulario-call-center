import { Component, OnInit } from '@angular/core';
import { BasicInfo } from './basicinfo';
import { FormsModule, ControlValueAccessor } from '@angular/forms';

import { ChangeDetectorRef } from '@angular/core';




@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})

export class BasicinfoComponent implements OnInit {
  model = new BasicInfo('', '', '', '', '', '', '', '', '', '');

  birthDay = '';
  birthMonth = '';
  birthYear = '';

  checkNFijo = false;

  showButton = false;

  showBasicInfo = true;
  showFinancialInfo = false;
  
  error = true;
  errorMessage = '';

  daysList = [];
  monthList = [];
  yearList = [];
  
  showErrorFirstName1: boolean = false;
  errorMessageFirstName1 = '';
  
  showErrorFirstName2: boolean = false;
  errorMessageFirstName2 = '';
  
  showErrorLastName1: boolean = false;
  errorMessageLastName1 = '';

  showErrorLastName2: boolean = false;
  errorMessageLastName2 = '';
  
  showErrorIdNumber: boolean = false;
  errorMessageIdNumber = '';
  
  showErrorBirthDate: boolean = false;
  errorMessageBirthDate = '';
  
  showErrorEmail: boolean = false;
  errorMessageEmail = '';
  
  showErrorPhoneNumber: boolean = false;
  errorMessagePhoneNumber = '';
  
  firstName1Check = false;
  firstName2Check = false;
  lastName1Check = false;
  lastName2Check = false;
  idNumberCheck = false;
  birthDateCheck = false;
  emailCheck = false;
  phoneCheck = false;
  
  constructor() {}

  ngOnInit() {
    this.daysList = Array(31).fill(0).map((x, i) => i + 1);
    this.monthList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', ];
    this.yearList = Array(69).fill(0).map((x, i) => i + 1950);
  }
  
  checkS(value): boolean {    
    if (!value.match(/[^a-zA-ZñÑ\s]+/g)) {
      return true;
    } else {
      return false;
    }
  } 
  
  checkEmail(value): boolean {
    if (value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/g)) {
      return true;
    } else {
      return false;
    }
  }
  
  submitted = false;
  onSubmit() { this.submitted = true; }
  
  validateFirstName1(): boolean {
    const value = this.model.firstName1;
    
    if (value == '') {
      this.showErrorFirstName1 = true;
      this.errorMessageFirstName1 = 'El campo de primer nombre es obligatorio';
    } else if (value.length < 3) {
      this.showErrorFirstName1 = true;
      this.errorMessageFirstName1 = 'El campo de primer nombre tiene que tener mas de 3 letras';
    } else if (!this.checkS(value)) {
      this.showErrorFirstName1 = true;
      this.errorMessageFirstName1 = 'El campo de primer nombre solo puede contener letras (A-Z) y espacios';
    } else {
      this.showErrorFirstName1 = false;
      this.errorMessageFirstName1 = '';
    }
    if (!this.showErrorFirstName1) {
      this.firstName1Check = true;
    } else {
      this.firstName1Check = false;
    }
    return this.showErrorFirstName1;
  }

  validateFirstName2(): boolean {
    const value = this.model.firstName2;

    if (value !== '') {
      if (value.length < 3) {
        this.showErrorFirstName2 = true;
        this.errorMessageFirstName2 = 'El campo de segundo nombre tiene que tener mas de 3 letras';
      } else if (!this.checkS(value)) {
        this.showErrorFirstName2 = true;
        this.errorMessageFirstName2 = 'El campo de segundo nombre solo puede contener letras (A-Z) y espacios';
      } else {
        this.showErrorFirstName2 = false;
        this.errorMessageFirstName2 = '';
      }
    }
    if (!this.showErrorFirstName2) {
      this.firstName2Check = true;
    } else {
      this.firstName2Check = false;
    }
    return this.showErrorFirstName2;
  }
  
  validateLastName1(): boolean {
    const value = this.model.lastName1;
    
    if (value == '') {
      this.showErrorLastName1 = true;
      this.errorMessageLastName1 = 'El campo de primer apellido es obligatorio';
    } else if (value.length < 3) {
      this.showErrorLastName1 = true;
      this.errorMessageLastName1 = 'El campo de primer apellido tiene que tener mas de 3 letras';
    } else if (!this.checkS(value)) {
      this.showErrorLastName1 = true;
      this.errorMessageLastName1 = 'El campo de primer apellido solo puede contener letras (A-Z) y espacios';
    } else {
      this.showErrorLastName1 = false;
      this.errorMessageLastName1 = '';
    }
    if (!this.showErrorLastName1) {
      this.lastName1Check = true;
    } else {
      this.lastName1Check = false;
    }
    return this.showErrorLastName1;
  }
  
  validateLastName2(): boolean {
    const value = this.model.lastName2;
    
    if (value != '') {
      if (value.length < 3) {
        this.showErrorLastName2 = true;
        this.errorMessageLastName2 = 'El campo de segundo apellido tiene que tener mas de 3 letras';
      } else if (!this.checkS(value)) {
        this.showErrorLastName2 = true;
        this.errorMessageLastName2 = 'El campo de segundo apellido solo puede contener letras (A-Z) y espacios';
      } else {
        this.showErrorLastName2 = false;
        this.errorMessageLastName2 = '';
      }
    }
    if (!this.showErrorLastName2) {
      this.lastName2Check = true;
    } else {
      this.lastName2Check = false;
    }
    return this.showErrorLastName2;
  }
  
  validateIdNumber(): boolean {
    if (this.model.idNumber != '' || this.model.idNumber != null ) {
      if (this.model.idNumber.toString().length < 6 ) {
        this.showErrorIdNumber = true;
        this.errorMessageIdNumber = 'El campo de cedula tiene que tener mas de 6 numeros';
      } else {
        this.showErrorIdNumber = false;
        this.errorMessageIdNumber = '';
      }
    }
    if (!this.showErrorIdNumber) {
      this.idNumberCheck = true;
    } else {
      this.idNumberCheck = false;
    }
    return this.showErrorIdNumber;
  }
  
  validateBirthDate(): boolean {
    if (this.model.birthDay == '' || this.model.birthMonth == '' || this.model.birthYear == '') {
      this.showErrorBirthDate = true;
      this.errorMessageBirthDate = 'El campo de fecha de nacimiento es obligatoria';
    } else {
      this.showErrorBirthDate = false;
      this.errorMessageBirthDate = '';
    }
    if (!this.showErrorBirthDate) {
      this.birthDateCheck = true;
    } else {
      this.birthDateCheck = false;
    }
    return this.showErrorBirthDate;
  }
  
  validateEmail(): boolean {
    if (this.model.email == '') {
      this.showErrorEmail = true;
      this.errorMessageEmail = 'El campo de correo electronico es obligatorio';
    } else if (this.model.email.length < 6 ) {
      this.showErrorEmail = true;
      this.errorMessageEmail = 'El campo de cedula tiene que tener mas de 6 numeros';
    } else if (!this.checkEmail(this.model.email)) {
      this.showErrorEmail = true;
      this.errorMessageEmail = 'El campo de correo electronico es incorrecto';
    } else {
      this.showErrorEmail = false;
      this.errorMessageEmail = '';
    }
    if (!this.showErrorEmail) {
      this.emailCheck = true;
    } else {
      this.emailCheck = false;
    }
    return this.showErrorEmail;
  }
  
  validateChangePhone() {
    this.checkNFijo = !this.checkNFijo;
    this.validatePhoneNumber();
  }
  
  validatePhoneNumber(): boolean {
    if (this.model.phoneNumber == '') {
      this.showErrorPhoneNumber = false;
      this.errorMessagePhoneNumber = 'El campo de número telefonico es obligatorio';
    } else if (this.model.phoneNumber != null) {
      if (this.checkNFijo) {
        if (this.model.phoneNumber.toString().length != 7) {
          this.showErrorPhoneNumber = true;
          this.errorMessagePhoneNumber = 'Si el número es fijo debe tener 7 números';
        } else {
          this.showErrorPhoneNumber = false;
          this.errorMessagePhoneNumber = '';
        } 
      } else if (!this.checkNFijo) {
        if (this.model.phoneNumber.toString().length != 10) {
          this.showErrorPhoneNumber = true;
          this.errorMessagePhoneNumber = 'Si el número es celular debe tener 10 números';
        } else if (this.model.phoneNumber.toString().charAt(0) != '3') {
          this.showErrorPhoneNumber = true;
          this.errorMessagePhoneNumber = 'Si el número es celular debe empezar contener un indicativo con rango entre 300 y 399';
        } else {
          this.showErrorPhoneNumber = false;
          this.errorMessagePhoneNumber = '';
        }
      }
    } else {
      this.showErrorPhoneNumber = false;
      this.errorMessagePhoneNumber = '';
    }
    if (!this.showErrorPhoneNumber) {
      this.phoneCheck = true;
    } else {
      this.phoneCheck = false;
    }
    return this.showErrorPhoneNumber;
  }
  
  checkRequiredValues(): boolean {
    if (this.firstName1Check && this.lastName1Check && this.idNumberCheck
      && this.birthDateCheck && this.emailCheck && this.phoneCheck) {
        if (this.model.firstName2 != '' && this.model.firstName2 != null) {
          if (!this.firstName2Check) {
            return false;
          }
        }
        if (this.model.lastName2 != '' && this.model.lastName2 != null) {
          if (!this.lastName2Check) {
            return false;
          }
        }
      return true;
    }
    return false;
  }
  
  finish(): void {
    this.showBasicInfo = false;
    this.showFinancialInfo = true;
  }

  backHome(): void {
    this.showBasicInfo = true;
    this.showFinancialInfo = true;
  }
  
}
