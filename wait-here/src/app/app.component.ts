import { Component } from '@angular/core';
import { WaitingListService } from './waiting-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wait-here';
  selectedStore: string;

  constructor(private waitingList: WaitingListService) {}


  getStore(name: string) {
    console.log(this.waitingList.getStore());
  }
}
