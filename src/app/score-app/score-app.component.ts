import { Component, OnInit, Input } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';

import { Score } from '../models/score.model';
import { ScoreService } from './score-app.service';
@Component({
  selector: 'app-score-app',
  templateUrl: './score-app.component.html',
  styleUrls: ['./score-app.component.css']
})
export class ScoreAppComponent implements OnInit {

  @Input() user : string;

  observation : string = '';
  selectStarYet : boolean = false;
  showStarOne: string = '../../assets/img/star-1.png';
  showStarTwo: string = '../../assets/img/star-2.png';
  showStarThree: string = '../../assets/img/star-3.png';
  showStarFour: string = '../../assets/img/star-4.png';
  showStarFive: string = '../../assets/img/star-5.png';
  finish: boolean = false;
  
  score: Score = new Score();

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    sessionStorage.setItem('scoreCustomer', '0')
  }

  finishProccess() {
    this.finish = true;
    sessionStorage.setItem('scoreObservationCustomer', this.observation);
    this.score.scoreValue = +sessionStorage.getItem('scoreCustomer');
    this.score.authorizeId = +sessionStorage.getItem('codeProcess');
    this.createScore();
  }

  createScore(): void {
    this.scoreService.saveScore(this.score)
        .subscribe( data => {
          alert("Score saved successfully.");
        });
  };

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
