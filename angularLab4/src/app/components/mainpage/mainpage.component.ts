import { Component, OnInit } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventEmittedMarker(){
    console.log("Event emitted.");
  }

}
