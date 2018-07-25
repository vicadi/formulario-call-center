import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-financiera',
  templateUrl: './informacion-financiera.component.html',
  styleUrls: ['./informacion-financiera.component.css']
})
export class InformacionFinancieraComponent implements OnInit {

  @Input() username: string;
  showFinnancial: boolean = true;
  showSummary: boolean = false;
  errorMessage: boolean = false;
  outcome: number;
  income: number;

  constructor() { }

  ngOnInit() {
  }

  showComponent(ingresos:any,egresos:any,activos:any,pasivos:any){
    this.showSummary = true;
    this.showFinnancial = false;
  }

}
 