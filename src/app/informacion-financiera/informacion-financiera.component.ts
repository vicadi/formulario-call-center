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
  errorMessageIncome: boolean = false;
  errorMessageOutcome: boolean = false;
  errorMessageActivos: boolean = false;
  errorMessagePasivos: boolean = false
  ingresos: string ='';
  egresos: string ='';
  activos: string ='';
  pasivos: string ='';
  income: number;
  outcome: number;
  temporal: any;
  anterior: any;

  constructor() { }

  ngOnInit() {
  }

  onKeyIngresos() {
    this.ingresos=this.ingresos.replace(/[^$0-9]/g, "");
    if(this.ingresos.length>0){
        this.temporal = this.ingresos.split('$');
        if (this.temporal.length>1) {
          if(parseInt(this.temporal[1])>0){
            this.ingresos = '$' + this.temporal[1];   
          }else{
            this.ingresos=''; 
          }
        }else{
          if(parseInt(this.temporal[0])>0){
            this.ingresos = '$' + this.temporal[0];   
          }else{
            this.ingresos=''; 
          }
        }
    }
  }

  onKeyEgresos() {
    this.egresos=this.egresos.replace(/[^$0-9]/g, "");
    if(this.egresos.length>0){
      this.temporal = this.egresos.split('$');
      if (this.temporal.length>1) {
        this.egresos = '$' + this.temporal[1];   
      }else{
        this.egresos = '$' + this.temporal[0];
      }
    }
  }

  onKeyActivos() {
    this.activos=this.activos.replace(/[^$0-9]/g, "");
    if(this.activos.length>0){
      this.temporal = this.activos.split('$');
      if (this.temporal.length>1) {
        this.activos = '$' + this.temporal[1];   
      }else{
        this.activos = '$' + this.temporal[0];
      }
    }
  }

  onKeyPasivos() {
    this.pasivos=this.pasivos.replace(/[^$0-9]/g, "");
    if(this.pasivos.length>0){
      this.temporal = this.pasivos.split('$');
      if (this.temporal.length>1) {
        this.pasivos = '$' + this.temporal[1];   
      }else{
        this.pasivos = '$' + this.temporal[0];
      }
    }
  }

  showComponent(){
    this.income = parseInt(this.ingresos.split('$')[1]);
    this.outcome = parseInt(this.egresos.split('$')[1]);
    this.showSummary = true;
    this.showFinnancial = false;
  }

  protected letOnlyNumbers(txt: string): string {
    if (txt.match(/[0-9]/g)) {
      return txt;
    } else {
      return '';
    }
  }

}
 