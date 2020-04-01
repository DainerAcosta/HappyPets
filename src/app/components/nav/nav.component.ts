import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
