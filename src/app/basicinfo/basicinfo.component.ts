import { Component, OnInit } from '@angular/core';
import { BasicInfo} from './basicinfo';
import { CustomerService } from '../services/customer.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})

@Injectable()
export class BasicinfoComponent implements OnInit {

  dataResponse: any
  model = new BasicInfo('', '', '', '', '', '', '', '', '', '');

  birthDay = '';
  birthMonth = '';
  birthYear = '';

  checkNFijo = false;

  showButton = false;

  showBasicInfo = true;
  showFinancialInfo = false;

  showCedula = true;
  showInfo = false;

  error = true;
  errorMessage = '';

  daysList = [];
  monthList = [];
  yearList = [];

  showErrorFirstName1 = false;
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

  submitted = false;

  firstName1Check = false;
  firstName2Check = false;
  lastName1Check = false;
  lastName2Check = false;
  idNumberCheck = false;
  birthDateCheck = false;
  emailCheck = false;
  phoneCheck = false;

  constructor (private http: HttpClient, private customerService : CustomerService) { }

  ngOnInit() {
    this.daysList = Array(31).fill(0).map((x, i) => i + 1);
    this.monthList = ['Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', ];
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
  onSubmit() { this.submitted = true; }

  loadIdNumber() {
    this.validCustomer();
    this.showCedula = false;
    this.showInfo = true;
  }

  validCustomer(){
    this.customerService.getCustomer(this.model.idNumber).subscribe(
      result => {
        this.model.firstName1 = result.firstName ? result.firstName :'';
         this.model.firstName2  = result.middleName ? result.middleName :'';
         this.model.lastName1  = result.lastName ? result.lastName :'';
         this.model.lastName2  = result.secondLastName ? result.secondLastName :'';
         this.model.email  = result.email ? result.email :'';
         this.model.phoneNumber  = result.numberPhone ? result.numberPhone :'';
         this.checkNFijo  = result.typePhone && result.typePhone == 'Phone' ? true:false;
         if(result.birthDate != null){
          let arrayDate =  result.birthDate.split("/")
          this.model.birthDay = arrayDate[0];
          this.model.birthMonth = arrayDate[1] ;
          this.model.birthYear = arrayDate[2] ;
         }
         sessionStorage.setItem('customerExist', 'true')
      },
      error => {
          sessionStorage.setItem('customerExist', 'false')
          if(error.status == '404'){
            console.log('cliente no encontrado');
          }else{
            console.log('Se presento un error con el servicio', error.status, 'Desc ', error.message);
          }
      }
    );
  }

  validateFirstName1(): boolean {
    const value = this.model.firstName1;
    if (value === '') {
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
    if (value === null || value === '') {
        this.showErrorFirstName2 = false;
        this.errorMessageFirstName2 = '';
    } else if (value !== '') {
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
    if (value === '') {
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
    if (value === null || value === '') {
        this.showErrorLastName2 = false;
        this.errorMessageLastName2 = '';
    } else if (value !== '') {
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
    this.model.idNumber = this.model.idNumber.replace(/[^$0-9]/g, '');
    if (this.model.idNumber.length > 10) {
      this.model.idNumber = this.model.idNumber.substring(0, 10);
    }
    if (this.model.idNumber !== '' || this.model.idNumber != null ) {
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
    if (this.model.birthDay === '' || this.model.birthMonth === '' || this.model.birthYear === '') {
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
    if (this.model.email === '') {
      this.showErrorEmail = true;
      this.errorMessageEmail = 'El campo de correo electronico es obligatorio';
    } else if (this.model.email.length < 6 ) {
      this.showErrorEmail = true;
      this.errorMessageEmail = 'El campo de correo electronico tiene que tener mas de 6 caracteres';
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
      this.errorMessagePhoneNumber = 'El número es obligatorio';
    } else if (this.model.phoneNumber != null) {
      if (this.checkNFijo) {
        if (this.model.phoneNumber.toString().length != 7) {
          this.showErrorPhoneNumber = true;
          this.errorMessagePhoneNumber = 'El número debe tener 7 números';
        } else {
          this.showErrorPhoneNumber = false;
          this.errorMessagePhoneNumber = '';
        } 
      } else if (!this.checkNFijo) {
        if (this.model.phoneNumber.toString().length != 10) {
          this.showErrorPhoneNumber = true;
          this.errorMessagePhoneNumber = 'El número debe tener 10 números';
        } else if (this.model.phoneNumber.toString().charAt(0) != '3') {
          this.showErrorPhoneNumber = true;
          this.errorMessagePhoneNumber = 'El número debe comenzar entre un rango de 300 y 399';
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
    sessionStorage.setItem('identityNumberCustomer', this.model.idNumber)
    sessionStorage.setItem('nameCustomer', this.model.firstName1)
    sessionStorage.setItem('middleNameCustomer', this.model.firstName2)
    sessionStorage.setItem('lastNameCustomer', this.model.lastName1)
    sessionStorage.setItem('secondLastNameCustomer', this.model.lastName2)
    sessionStorage.setItem('mailCustomer', this.model.email)
    sessionStorage.setItem('phoneTypeCustomer', this.checkNFijo? 'Phone':'Cellphone')
    sessionStorage.setItem('phoneNumberCustomer', this.model.phoneNumber)
    sessionStorage.setItem('birthDayCustomer', this.model.birthDay +'/'+ this.model.birthMonth + '/'+ this.model.birthYear)
    this.showBasicInfo = false;
    this.showFinancialInfo = true;
  }

  backHome(): void {
    this.showBasicInfo = true;
    this.showFinancialInfo = true;
  }
}
