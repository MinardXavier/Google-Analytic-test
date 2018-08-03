import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.less']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'First component',
      eventLabel: 'First link',
      eventAction: 'Click again',
      eventValue: 10
    });
  }
}
