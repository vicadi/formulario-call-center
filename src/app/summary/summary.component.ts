import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { SummaryService } from './summary.service';
import { CustomerService } from '../services/customer.service';
import { CheckService } from '../services/check.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() outcome: number;
  @Input() income: number;
  @Input() username: string;

  userCall: string;
  showButton = false;
  showHome = false;
  showSummary = true;
  valueApproved: string;
  approved = false;
  showPurpleCard = false;
  showBlueCard = false;
  showWhiteCard = false;
  showDeliveryCard = false;

  constructor(private customerService: CustomerService, private checkService: CheckService, private summaryService: SummaryService) { }
  ngOnInit() {
    this.userCall = sessionStorage.getItem('userCall');
    this.summaryService.obtaingApproved(this.income, this.outcome).subscribe(
      data => {
        this.valueApproved = data._body;
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
    sessionStorage.setItem('checkCustomer', 'true');
    sessionStorage.setItem('valueApprovedCustomer', this.valueApproved);
    const customerExist = sessionStorage.getItem('customerExist');
    const requestDto = {
      'identitynumber': sessionStorage.getItem('identityNumberCustomer'),
      'firstName': sessionStorage.getItem('nameCustomer'),
      'middleName': sessionStorage.getItem('middleNameCustomer'),
      'lastName': sessionStorage.getItem('lastNameCustomer'),
      'secondLastName': sessionStorage.getItem('secondLastNameCustomer'),
      'email': sessionStorage.getItem('mailCustomer'),
      'typePhone': sessionStorage.getItem('phoneTypeCustomer'),
      'numberPhone': sessionStorage.getItem('phoneNumberCustomer'),
      'birthDate' : sessionStorage.getItem('birthDayCustomer')
    };
    if (customerExist != null && customerExist === 'true') {
      this.updateCustomer(requestDto);
    } else {
      this.createCustomer(requestDto);
    }
  }

  createCustomer(requestDto) {
    this.customerService.createCustomer(requestDto).subscribe(
      result => {
        console.log('Customer created');
        this.saveCheck();
      },
      error => {
        console.log('FAIL CREATE CUSTOMER');
      }
    );
  }

  updateCustomer(requestDto) {
    this.customerService.updateCustomer(requestDto).subscribe(
      result => {
        console.log('Customer updated', result);
        this.saveCheck();
      },
      error => {
        console.log('FAil UPDATE CUSTOMER');
      }
    );
  }

  saveCheck() {
    const requestDto = {
      'typeCreditCard': sessionStorage.getItem('typeCreditCard'),
      'userId': sessionStorage.getItem('idUserCall'),
      'customerId': sessionStorage.getItem('identityNumberCustomer')
    };
    this.checkService.saveCheckCustomer(requestDto).subscribe(
      result => {
        sessionStorage.setItem('codeProcess', result.codeProcess);
        console.log('Check sucess', result);
      },
      error => {
        console.log('Fail check');
      }
    );
  }


  getValueApproved(): void {
    if (this.valueApproved !== 'NEGADO') {
      this.approved = true;
      if (this.valueApproved === '$ 30.000.000') {
        this.showPurpleCard = true;
        sessionStorage.setItem('typeCreditCard', 'Purple');
      } else if (this.valueApproved === '$ 20.000.000') {
        this.showBlueCard = true;
        sessionStorage.setItem('typeCreditCard', 'Blue');
      } else {
        this.showWhiteCard = true;
        sessionStorage.setItem('typeCreditCard', 'White');
      }
    } else {
      this.approved = false;
    }
  }

  backHome() {
    this.showSummary = false;
    this.showHome = true;
  }

}
