import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Homepage',
      eventLabel: 'button',
      eventAction: 'Click once',
      eventValue: 10
    });
  }
}
