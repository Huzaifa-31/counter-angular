import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css'],
})
export class CounterbuttonComponent {
  counterchild = 0;
  @Output() counter = new EventEmitter<number>();
  addcounter() {
    this.counter.emit(this.counterchild++);

    console.log('add :>> +');
  }
  subcounter() {
    this.counter.emit(this.counterchild--);

    console.log('sub :>> -');
  }
}
