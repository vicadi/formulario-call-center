import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-financiera',
  templateUrl: './informacion-financiera.component.html',
  styleUrls: ['./informacion-financiera.component.css']
})
export class InformacionFinancieraComponent implements OnInit {

  showFinnancial: boolean = true;
  showSummary: boolean = false;
  errorMessage: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showComponent(ingresos:any,egresos:any,activos:any,pasivos:any){
    this.showSummary = true;
    this.showFinnancial = false;
  }

}
 