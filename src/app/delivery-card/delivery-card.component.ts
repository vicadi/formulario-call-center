import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-card',
  templateUrl: './delivery-card.component.html',
  styleUrls: ['./delivery-card.component.css']
})
export class DeliveryCardComponent implements OnInit {

  showHome: boolean = true;
  showOffice: boolean = false;
  showDeliveryCard: boolean = true;

  city: string;
  neighborhood: string;
  address: string;

  showBogota: boolean = false;
  showCovenas: boolean = false;
  showPlanetaRica: boolean = false;
  names: string[] = ['Oficina Principal de Bogotá','Oficina Coveñas','Oficina Planeta Rica'];
  addresses: string[] = ['Carrera 13 Nº 45 - 40','Carrera 16 N 12 -13','Calle 14 N 12 -14'];
  nameOffice: string = '';
  addressOffice: string = '';

  constructor() { }

  ngOnInit() {
  }

  onClickHome(){
    this.showHome = true;
    this.showOffice = false;
    this.city='';
    this.neighborhood='';
    this.address='';
  }

  onClickOffice(){
    this.showHome = false;
    this.showOffice = true;
    this.showBogota = false;
    this.showCovenas = false;
    this.showPlanetaRica = false;
    this.nameOffice = '';
    this.addressOffice = '';
  }

  onClickBogota(){
    this.showBogota = true;
    this.showCovenas = false;
    this.showPlanetaRica = false;
    sessionStorage.setItem('cityCurrierCustomer', 'Bogotá')
    this.nameOffice = this.names[0];
    this.addressOffice = this.addresses[0];
  }

  onClickCovenas(){
    this.showBogota = false;
    this.showCovenas = true;
    this.showPlanetaRica = false;
    this.nameOffice = this.names[1];
    sessionStorage.setItem('cityCurrierCustomer', 'Coveñas')
    this.addressOffice = this.addresses[1];
  }

  onClickPlanetaRica(){
    this.showBogota = false;
    this.showCovenas = false;
    this.showPlanetaRica = true;
    sessionStorage.setItem('cityCurrierCustomer', 'Planeta Rica')
    this.nameOffice = this.names[2];
    this.addressOffice = this.addresses[2];
  }

  showComponent(){
    this.showDeliveryCard = false;
    if(this.showOffice){
      sessionStorage.setItem('officeCurrierCustomer', this.nameOffice)
      sessionStorage.setItem('addressCurrierCustomer', this.addressOffice)
    } else{
      sessionStorage.setItem('cityCurrierCustomer', this.city)
      sessionStorage.setItem('neighborhoodCurrierCustomer', this.neighborhood)
      sessionStorage.setItem('addressCurrierCustomer', this.address)
    }   
  }
}
