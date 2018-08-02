import { Component, OnInit , Input} from '@angular/core';
import { CustomerService } from '../services/customer.service'
import { CheckService } from '../services/check.service'

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
  valueApproved : string;
  approved: boolean = false;
  showPurpleCard : boolean = false;
  showBlueCard : boolean = false;
  showWhiteCard : boolean = false;
  showDeliveryCard: boolean = false;


  constructor(private customerService: CustomerService, private checkService: CheckService) { }
  ngOnInit() {
    this.getValueApproved();
  }
 
  onSelect(): void {
    this.showButton = !this.showButton;
  }

  finish(): void {
    this.showDeliveryCard = true;
    this.showSummary = false;
    sessionStorage.setItem('valueApprovedCustomer', this.valueApproved)
    var customerExist = sessionStorage.getItem('customerExist');
    const requestDto = {
      "identitynumber":sessionStorage.getItem('identityNumberCustomer'),
      "firstName":sessionStorage.getItem('nameCustomer'),
      "middleName":sessionStorage.getItem('middleNameCustomer'),
      "lastName":sessionStorage.getItem('lastNameCustomer'),
      "secondLastName":sessionStorage.getItem('secondLastNameCustomer'),
      "email":sessionStorage.getItem('mailCustomer'),
      "typePhone":sessionStorage.getItem('phoneTypeCustomer'),
      "numberPhone":sessionStorage.getItem('phoneNumberCustomer'),
      "birthDate":sessionStorage.getItem('birthDayCustomer')
    };
    if(customerExist != null && customerExist == 'true'){
      this.updateCustomer(requestDto);
    }else{
      this.createCustomer(requestDto);
    }
  }

  createCustomer(requestDto){
    this.customerService.createCustomer(requestDto).subscribe(
      result => {
        console.log('Customer created');
        this.saveCheck()
      },
      error => {
        console.log('FAIL CREATE CUSTOMER');
      }
    );
  }

  updateCustomer(requestDto){
    this.customerService.updateCustomer(requestDto).subscribe(
      result => {
        console.log('Customer updated', result);
        this.saveCheck()
      },
      error => {
        console.log('FAil UPDATE CUSTOMER');
      }
    );
  }

  saveCheck(){
    const requestDto = {
      "typeCreditCard":sessionStorage.getItem('typeCreditCard'),
      "userId": '1',
      "customerId":sessionStorage.getItem('identityNumberCustomer')
    };
    this.checkService.saveCheckCustomer(requestDto).subscribe(
      result => {
        console.log('Check sucess', result);
      },
      error => {
        console.log('Fail check');
      }
    );
  }


  getValueApproved(): void{
    
    var double = this.outcome * 2;
    var oneHundredFifty = this.outcome * 1.5;
    var oneHundredOne = this.outcome * 1.01;
    
    if(this.income >= double){
      this.valueApproved = '$ 30.000.000'
      this.approved = true;
      this.showPurpleCard = true;
      sessionStorage.setItem('typeCreditCard', 'Purple')
    }else if (this.income >= oneHundredFifty && this.income < double){
      this.valueApproved = '$ 20.000.000'
      this.approved = true;
      this.showBlueCard = true;
      sessionStorage.setItem('typeCreditCard', 'Blue')
    }else if (this.income >= oneHundredOne && this.income < oneHundredFifty){
      this.valueApproved = '$ 10.000.000'
      this.approved = true;
      this.showWhiteCard= true;
      sessionStorage.setItem('typeCreditCard', 'White')
    }else{
      this.valueApproved = 'NEGADO'
      this.approved = false;
    }
  }

  backHome() {
    this.showSummary = false;
    this.showHome = true;
  }

}
