import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  showButton = false;
  valueApproved = 0;
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
    this.valueApproved = Math.floor((Math.random() * 10000000) + 1);
  }

}