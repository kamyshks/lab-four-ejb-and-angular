import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})
export class CoordinatesComponent implements OnInit {

  valueY = 0;
  selectedValueX = 0;
  selectedValueR = 2;

  @Output() changedR = new EventEmitter();
  redraw(){
    console.log("redrawing...");
    this.changedR.emit(this.selectedValueR);
    console.log("redrawed.");
  }

  constructor() { }

  ngOnInit() {
  }

}
