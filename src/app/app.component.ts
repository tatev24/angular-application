import { Component } from '@angular/core';
import {NinjaInterface} from "./interfaces/ninja.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  public title: string = "Ninjas";
  public ninjas: NinjaInterface[] = [];
  public ninja: NinjaInterface = {
    name: "",
    age: 0,
    color: ''
  };

  yell(e){

  };

  create(ninja: NinjaInterface) {
    console.log(ninja);
    this.ninjas.push(ninja);
  }
}
