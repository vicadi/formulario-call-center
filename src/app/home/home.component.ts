import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  name: any = '';
  userCall: any = '';
  showHome = true;
  showBasicInfo  = false;

  constructor() { }

  ngOnInit() {
    this.userCall = sessionStorage.getItem('userCall');
    this.name = this.name.name;
  }

  showComponent() {
    this.showHome = false;
    this.showBasicInfo = true;
  }


}
