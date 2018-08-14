import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css']
})
export class NavBarUserComponent implements OnInit {
  name = 'Camila Paz';

  constructor() { }

  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    console.log('userCall', this.name );
    this.name = sessionStorage.getItem('userCall');
  }

}
