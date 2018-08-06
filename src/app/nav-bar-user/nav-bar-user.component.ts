import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css']
})
export class NavBarUserComponent implements OnInit {
  name : string = 'Camila Paz';

  @Input() user : string;

  constructor() { }

  ngOnInit() {
    this.name = JSON.parse(this.user).name;
  }

}
