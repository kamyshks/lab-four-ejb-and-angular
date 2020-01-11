import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showModalWin() {
    // alert('Modal Window!');
    const darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    darkLayer.style.position = 'fixed';
    darkLayer.style.width = '100%';
    darkLayer.style.height = '100%';
    darkLayer.style.zIndex = '1';
    darkLayer.style.background = '#000';
    darkLayer.style.opacity = ' 0.7';
    darkLayer.style.left = '0';
    darkLayer.style.top = '0';
    document.body.appendChild(darkLayer);

    const modalWin = document.getElementById('popupWin');
    modalWin.style.display = 'block';

    // tslint:disable-next-line:only-arrow-functions
    darkLayer.onclick = function() {
      darkLayer.parentNode.removeChild(darkLayer);
      modalWin.style.display = 'none';
      return false;
    };
  }

}

