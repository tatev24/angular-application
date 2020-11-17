import { Component } from '@angular/core';

@Component({
  selector: 'app-incement-decrement',
  templateUrl: './incement-decrement.component.html',
  styleUrls: ['./incement-decrement.component.css']
})
export class IncementDecrementComponent {
  number: number = 0;
  show: boolean = false;

  increment(){
    this.number = this.number + 1;
    this.divided();
  }

  decrement(){
    if (this.number > 0) {
      this.number--;
      this.divided();
    }
  }

  divided(){
    this.show = this.number % 3 === 0;
  }
}
