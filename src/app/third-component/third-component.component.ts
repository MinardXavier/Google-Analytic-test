import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.less']
})
export class ThirdComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Third component',
      eventLabel: 'Previously on linking dead',
      eventAction: '♫ click click again ♫',
      eventValue: 10
    });
  }
}
