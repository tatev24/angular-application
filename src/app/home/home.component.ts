import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to homepage ninja directory";
  myString = "Chickennn";
  myBoolean: boolean = true;
  ninja = {
    name: "",
    belt: "",
    age: 0
  };

  constructor() { }

  ngOnInit() {
  }

  alertMe(val) {
    console.log(val);
    this.ninja.name = "John";

  }

  save() {
    console.log(this.ninja);
  }

  update(value) {
    console.log(value.target.value);
  }
}
