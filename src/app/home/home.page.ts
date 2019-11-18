import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  flag = true;

  constructor() {}


  timer() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async locationTime() {
    await this.timer();
  }

  onClick() {
    this.flag = false;
    this.locationTime().then(() => {this.flag = true; });

  }

}
