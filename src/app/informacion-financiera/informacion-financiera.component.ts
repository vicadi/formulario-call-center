import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-financiera',
  templateUrl: './informacion-financiera.component.html',
  styleUrls: ['./informacion-financiera.component.css']
})
export class InformacionFinancieraComponent implements OnInit {

  ingresos: String;
  ingresosBool: Boolean;

  constructor() { }

  ngOnInit() {
  }

  validarIngresos() {
    let num = (this.ingresos as string);
    num = num.replace(/\D/g, '')
      .replace(/./g, (txt => this.letOnlyNumbers(txt)));
    if (num && num.length === 15 && parseInt(num)>0) {
      this.ingresosBool = true;
    } else {
      this.ingresosBool = true;
    }
  }

  protected letOnlyNumbers(txt: string): string {
    if (txt.match(/[0-9]/)) {
      return txt;
    } else {
      return '';
    }
  }

}
