import { Component, OnInit } from '@angular/core';
import { IfStmt } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-score-app',
  templateUrl: './score-app.component.html',
  styleUrls: ['./score-app.component.css']
})
export class ScoreAppComponent implements OnInit {

  observation : string = '';
  selectStarYet : boolean = false;
  showStarOne: string = '../../assets/img/star-1.png';
  showStarTwo: string = '../../assets/img/star-2.png';
  showStarThree: string = '../../assets/img/star-3.png';
  showStarFour: string = '../../assets/img/star-4.png';
  showStarFive: string = '../../assets/img/star-5.png';
  finish: boolean = false;
  
  constructor() { }

  ngOnInit() {
    sessionStorage.setItem('scoreCustomer', '0')
  }

  finishProccess() {
    this.finish = true;
    sessionStorage.setItem('scoreObservationCustomer', this.observation)
  }

  selectStar(idStar: Number) {
    this.selectStarYet = !this.selectStar;
    if(this.selectStarYet == false){this.restarStar()}
    switch (idStar) {
      case 1:
        this.showStarOne = '../../assets/img/star-1-purple.png';
        this.selectStarYet = true;
        sessionStorage.setItem('scoreCustomer', '1')
        break;
      case 2:
        this.showStarOne = '../../assets/img/star-1-purple.png';
        this.showStarTwo = '../../assets/img/star-2-purple.png';
        this.selectStarYet = true;
        sessionStorage.setItem('scoreCustomer', '2')
        break;
      case 3:
        this.showStarOne = '../../assets/img/star-1-purple.png';
        this.showStarTwo = '../../assets/img/star-2-purple.png';
        this.showStarThree = '../../assets/img/star-3-purple.png';
        this.selectStarYet = true;
        sessionStorage.setItem('scoreCustomer', '3')
        break;
      case 4:
        this.showStarOne = '../../assets/img/star-1-purple.png';
        this.showStarTwo = '../../assets/img/star-2-purple.png';
        this.showStarThree = '../../assets/img/star-3-purple.png';
        this.showStarFour = '../../assets/img/star-4-purple.png';
        this.selectStarYet = true;
        sessionStorage.setItem('scoreCustomer', '4')
        break;
      case 5:
        this.showStarOne = '../../assets/img/star-1-purple.png';
        this.showStarTwo = '../../assets/img/star-2-purple.png';
        this.showStarThree = '../../assets/img/star-3-purple.png';
        this.showStarFour = '../../assets/img/star-4-purple.png';
        this.showStarFive = '../../assets/img/star-5-purple.png';
        this.selectStarYet = true;
        sessionStorage.setItem('scoreCustomer', '5')
        break;
      default:
        break;
    }

  }
  restarStar() {
    this.showStarOne = '../../assets/img/star-1.png';
    this.showStarTwo = '../../assets/img/star-2.png';
    this.showStarThree = '../../assets/img/star-3.png';
    this.showStarFour = '../../assets/img/star-4.png';
    this.showStarFive= '../../assets/img/star-5.png';
  }

}
