import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  name: any = "Camilita";
  user: any = "";

  @Input() userName : string;

  showHome: boolean = true;
  showBasicInfo: boolean = false;

  constructor() { }

  ngOnInit() {
    this.user = this.userName;
    this.name = JSON.parse(this.userName);
    this.name = this.name.name;
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
