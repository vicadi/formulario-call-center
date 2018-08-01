import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showHome: boolean = true;
  showBasicInfo: boolean = false;

  constructor() { }

  ngOnInit() {
    //clear session
    // this.clearSession()
  }

  showComponent(){
    this.showHome = false;
    this.showBasicInfo = true;
  }

  clearSession(){
    sessionStorage.clear();
  }
}
