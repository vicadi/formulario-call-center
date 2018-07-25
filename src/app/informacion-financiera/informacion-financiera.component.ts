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
  outcome: number;
  income: number;
  ingresos: string;
  egresos: string;
  activos: string;
  pasivos: string;

  constructor() { }

  ngOnInit() {
  }

  showComponent(){
    this.showSummary = true;
    this.showFinnancial = false;
  }

}
 