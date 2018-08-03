import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.less']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Second component',
      eventLabel: 'Button again !',
      eventAction: 'That\'s a click',
      eventValue: 10
    });
  }
}
