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

  constructor() {
  }

  ngOnInit() {
  }
  
  checkS(event) {    
    if(!event.match(/[^a-zA-Z]+/g)){
      return event;
    }else{
      return event.substring(0, event.length - 1); 
    }
  } 
  
  submitted = false;

  onSubmit() { this.submitted = true; }
  
}
