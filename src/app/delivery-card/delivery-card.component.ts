import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-card',
  templateUrl: './delivery-card.component.html',
  styleUrls: ['./delivery-card.component.css']
})
export class DeliveryCardComponent implements OnInit {

  showHome: boolean = true;
  showOffice: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClickHome(){
    this.showHome = true;
    this.showOffice = false;
  }

  onClickOffice(){
    this.showHome = false;
    this.showOffice = true;
  }

}
