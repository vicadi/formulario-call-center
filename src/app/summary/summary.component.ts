import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  showButton = false;
  valueApproved : string;
  constructor() { }
  ngOnInit() {
    this.getRandomInt();
  }
 
  onSelect(): void {
    this.showButton = !this.showButton;
  }

  finish(): void {
    alert('Felicitaciones, tu tarjeta esta en camino!');
  }

   getRandomInt(): void {
    var pepito = Math.floor((Math.random() * (9999999 - 1000000) + 1000000));
    this.valueApproved = pepito.toString();
    this.valueApproved  = '$ '+ this.valueApproved.substring(0,1)+'.'+this.valueApproved .substring(1,4)+'.'+this.valueApproved .substring(4);
  }

}