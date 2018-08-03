import { Component, OnInit } from '@angular/core';
import { DeliveryCardService } from './delivery-card.service';

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
  listAddress1: string;
  listAddress2: string;
  address1: string;
  address2: string;
  address: string;
  cityOffice: string;
  office: string;

  nameOffice: string = '';
  addressOffice: string = '';

  cities: string[] = [];
  listAdds1: string[] = [];
  listAdds2: string[] = [];
  offices: string[] = [];

  constructor(private deliveryCardService: DeliveryCardService) {  }

  ngOnInit() {
    this.generateCities();
    this.generateListAdds1();
  }

  generateCities(){
    this.cities = [];
    this.deliveryCardService.getCities().subscribe(
      data => {
        for(let obj of data){
          this.cities.push(obj.name);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  generateListAdds1(){
    this.listAdds1 = [];
    this.deliveryCardService.getListAdd().subscribe(
      data => {
        for(let obj of data){
          this.listAdds1.push(obj);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  generateListAdds2(){
    this.listAdds2 = [];
    let type = this.listAddress1.split("+")[1];
    this.deliveryCardService.getListAddByType(type).subscribe(
      data => {
        for(let obj of data){
          this.listAdds2.push(obj);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  generateOffices(){
    this.offices = [];
    this.nameOffice = '';
    this.addressOffice = '';
    this.office = '';
    this.deliveryCardService.getOffice(this.cityOffice).subscribe(
      data => {
        for(let obj of data){
          this.offices.push(obj);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onClickHome(){
    this.showHome = true;
    this.showOffice = false;
    this.city='';
    this.neighborhood='';
    this.listAddress1='';
    this.listAddress1='';
    this.listAddress2='';
    this.address1='';
    this.address2='';
  }

  onClickOffice(){
    this.showHome = false;
    this.showOffice = true;
    this.nameOffice = '';
    this.addressOffice = '';
    this.cityOffice = '';
    this.office = '';
  }

  showComponent(){
    this.showDeliveryCard = false;
    if(this.showOffice){
      sessionStorage.setItem('officeCurrierCustomer', this.nameOffice)
      sessionStorage.setItem('addressCurrierCustomer', this.addressOffice)
    } else{
      this.generateAddress();
      sessionStorage.setItem('cityCurrierCustomer', this.city)
      sessionStorage.setItem('neighborhoodCurrierCustomer', this.neighborhood)
      sessionStorage.setItem('addressCurrierCustomer', this.address);
    }   
  }

  generateAddress(){
    this.address = this.listAddress1+' '+this.address1+' '+this.listAddress2+' '+this.address2;
  }

  generateNameAndAddress(){
    this.nameOffice = this.office.split("+")[0];
    this.addressOffice = this.office.split("+")[1];
  }
}
