import { Component, OnInit } from '@angular/core';
import { BasicInfo } from './basicinfo';
import { FormsModule, ControlValueAccessor } from '@angular/forms';



@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})

export class BasicinfoComponent implements OnInit{
  model = new BasicInfo('','','','');
  
  showButton:boolean = false;
  
  showBasicInfo:boolean = true;
  showFinancialInfo:boolean = false;
  
  error:boolean = false;
  errorMessage = '';

  constructor() {
  }

  ngOnInit() {
  }
  
  checkS(value):boolean{    
    if(!value.match(/[^a-zA-Z]+/g)){
      return true;
    }else{
      return false;
    }
  } 
  
  submitted = false;
  onSubmit() { this.submitted = true; }
  
  checkRequiredValues():boolean {
    var check:boolean = true;
  
    if(!this.checkValidation(this.model.firstName1, 'primer nombre') || !this.checkValidation(this.model.lastName1, 'primer apellido') ){
      check = false;  
    }else{
      if(this.model.firstName2 != ''){
        if(!this.checkS(this.model.firstName2)){
          check = false;
          this.errorMessage = 'El campo de segundo nombre solo puede contener letras (A-Z) y espacios';
          this.error = true;
        }
      }
      if(this.model.lastName2 != ''){
        if(!this.checkS(this.model.lastName2)){
          check = false;
          this.errorMessage = 'El campo de segundo apellido solo puede contener letras (A-Z) y espacios';
          this.error = true;
        }
      }
    }
  
    return check;
  }
  
  checkValidation(value, message):boolean {
    var check:boolean = false;
    if(value == ''){
      this.errorMessage = 'El campo de ' + message + ' es obligatorio';
      this.error = true;
    }else if(!this.checkS(value)){
      this.errorMessage = 'El campo de ' + message + ' solo puede contener letras (A-Z) y espacios';
      this.error = true;
    }else{
      this.errorMessage = '';
      this.error = false;
      check = true;
    }
    return check;
  }
  
  
  finish():void{
    this.showBasicInfo = false;
    this.showFinancialInfo = true;
  }
  
}
