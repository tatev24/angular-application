import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

  listValue: string = "Item 1";
  listGroupArray = ["007 Item", "008 Item"];
  constructor() { }

  ngOnInit(): void {

  }

  addItem(){
    let randomNumber = Math.floor(Math.random() * 1000);
    let value = randomNumber + " Item";
    this.listGroupArray.push(value);

    console.log('WOW', this.listGroupArray);
  }
}
