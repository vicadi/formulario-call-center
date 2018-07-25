import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() outcome: number;
  @Input() income: number;

  showButton: boolean =false;
  valueApproved : string;
  approved: boolean = false;

  constructor() { }
  ngOnInit() {
    this.getValueApproved();
  }
 
  onSelect(): void {
    this.showButton = !this.showButton;
  }

  finish(): void {
    alert('Felicitaciones, tu tarjeta esta en camino!');
  }

  getValueApproved(): void{
    
    var double = this.outcome * 2;
    var oneHundredFifty = this.outcome * 1.5;
    var oneHundredOne = this.outcome * 1.01;
    
    if(this.income >= double){
      this.valueApproved = '$ 30.000.000'
      this.approved = true;
    }else if (this.income >= oneHundredFifty && this.income < double){
      this.valueApproved = '$ 20.000.000'
      this.approved = true;
    }else if (this.income >= oneHundredOne && this.income < oneHundredFifty){
      this.valueApproved = '$ 10.000.000'
      this.approved = true;
    }else{
      this.valueApproved = 'NEGADO'
      this.approved = false;
    }
  }

}