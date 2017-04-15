import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstClick: boolean;
  secondClick: boolean;

  constructor() {
    this.firstClick = false;
    this.secondClick = false;
  }

  ngOnInit():void {

  }
}
