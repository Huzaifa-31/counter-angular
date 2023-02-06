import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CounterApp';
  counter = 0;
  counterUpdated(counter: number) {
    this.counter = counter;
    console.log('child to parent', this.counter);
  }
}
