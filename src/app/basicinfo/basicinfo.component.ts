import { Component, OnInit } from '@angular/core';
import { BasicInfo } from './basicinfo';
import { FormsModule, ControlValueAccessor } from '@angular/forms';



@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})

export class BasicinfoComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
  }
  
  checkS(value) {
    if(!value.match(/[^a-zA-Z]+/g)){
      return value;
    }

    return value.substring(0, value.length - 1); 
  } 
  
  model = new BasicInfo('','','','');
}
