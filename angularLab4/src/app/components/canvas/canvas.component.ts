import { Component, OnInit } from '@angular/core';
// import { CoordinatesComponent } from '../coordinates';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  draw(r) {
    console.log("callng draw()...")
    // axis
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 450, 450);
    ctx.strokeStyle = 'azure';
    ctx.lineWidth = 2;
    // Oy
    ctx.beginPath();
    ctx.moveTo(225, 225);
    ctx.lineTo(420, 225);
    ctx.moveTo(425, 225);
    ctx.lineTo(420, 230);
    ctx.moveTo(425, 225);
    ctx.lineTo(420, 220);
    ctx.stroke();
    ctx.moveTo(225, 225);
    ctx.lineTo(30, 225);
    ctx.moveTo(225, 225);
    ctx.lineTo(225, 420);
    ctx.stroke();
    ctx.moveTo(225, 225);
    ctx.lineTo(225, 30);
    ctx.moveTo(225, 25);
    ctx.lineTo(230, 35);
    ctx.moveTo(220, 35);
    ctx.lineTo(225, 25);
    ctx.stroke();
// circle
    ctx.fillStyle = 'darkslategray';
    ctx.moveTo(225, 225 - 22 * r);
    ctx.arc(225, 225, 22 * r, 1.5 * Math.PI, 0);
    ctx.stroke();

// triangle
    ctx.moveTo(225, 225 + 22 * r);
    ctx.lineTo(225 + 22 * r, 225);
    ctx.stroke();

// rectangle
    ctx.moveTo(225, 225 - 44 * r);
    ctx.lineTo(225 - 44 * r, 225 - 44 * r);
    ctx.lineTo(225 - 44 * r, 225);
    ctx.stroke();
  }

  constructor() {
    window.onload = () => {
      this.draw(0);
    };
  }

  ngOnInit() {
  }

}
