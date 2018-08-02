import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router'

import { SummaryService } from './summary.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() outcome: number;
  @Input() income: number;
  @Input() username: string;

  showButton: boolean =false;
  showHome: boolean = false;
  showSummary: boolean = true;
  valueApproved : String;
  approved: boolean = false;
  showPurpleCard : boolean = false;
  showBlueCard : boolean = false;
  showWhiteCard : boolean = false;
  showDeliveryCard: boolean = false;

  constructor(private summaryService: SummaryService) { };

  ngOnInit() {
    this.summaryService.obtaingApproved(this.income, this.outcome).subscribe(
      data => {
        this.valueApproved = data;
        this.getValueApproved();
      },
      error => {
        console.log(error);
      }
    );
  }
 
  onSelect(): void {
    this.showButton = !this.showButton;
  }

  finish(): void {
    this.showDeliveryCard = true;
    this.showSummary = false;
    sessionStorage.setItem('valueApprovedCustomer', this.valueApproved)
    sessionStorage.setItem('checkCustomer', 'true')
  }

  getValueApproved(): void{
    if (this.valueApproved != "NEGADO") {
      this.approved = true;
    } else {
      this.approved = false;
    }
  }

  backHome() {
    this.showSummary = false;
    this.showHome = true;
  }

}
