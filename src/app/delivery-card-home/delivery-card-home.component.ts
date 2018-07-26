import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-card-home',
  templateUrl: './delivery-card-home.component.html',
  styleUrls: ['./delivery-card-home.component.css']
})
export class DeliveryCardHomeComponent implements OnInit {

  city: string;
  neighborhood: string;
  address: string;

  constructor() { }

  ngOnInit() {
  }

  showComponent(){
    alert("Tu tarjeta de crédito esta en camino");
  }

}
