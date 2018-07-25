import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-financiera',
  templateUrl: './informacion-financiera.component.html',
  styleUrls: ['./informacion-financiera.component.css']
})
export class InformacionFinancieraComponent implements OnInit {

  showFinnancial: boolean = true;
  showSummary: boolean = false;
  errorMessageIncome: boolean = false;
  errorMessageOutcome: boolean = false;
  errorMessageActivos: boolean = false;
  errorMessagePasivos: boolean = false;
  outcome: number;
  income: number;
  activos: number;
  pasivos: number;
  
  ingresosString: string='';

  constructor() { }

  ngOnInit() {
  }

  showComponent(){
    if(this.income!=undefined && this.income!=null) {
      this.errorMessageIncome = true;
    }
    this.showSummary = true;
    this.showFinnancial = false;
  }

}
 