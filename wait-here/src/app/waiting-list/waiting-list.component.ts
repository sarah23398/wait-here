import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent implements OnInit {
  list: number[];
  count = 0;
  timeLeft: number = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
    this.list = [];
  }

  // Add customer to ATM waiting list
  add(): void {
    // Start timer after first customer joins the waiting WaitingListComponent
    if (this.count == 0) {
      this.startTimer();
    }
    this.list.push(this.count++);
    // Add 30 seconds wait time for each customer
    this.timeLeft += 30;
  }

  // Remove first customer from waitng list
  remove(): void {
    this.list.pop();
    this.count--;
  }

  // Customer has 30 seconds to use the ATM before they are removed
  startTimer() {
    this.interval = setInterval(() => {
      if (this.count > 0) {
        if(this.timeLeft > 30 * (this.count - 1)) {
          this.timeLeft--;
        } else {
          this.remove();
        }
      }
    },1000);
  }

  // Customer finished earlier than 30 seconds, next customer is called up
  done() {
    if (this.count > 0) {
      this.timeLeft = 30 * (this.count -1);
      this.startTimer;
    }
  }
}
