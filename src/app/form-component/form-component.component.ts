import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NinjaInterface} from "../interfaces/ninja.interface";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  @Input() ninja: NinjaInterface;
  // @Input() ninjas;
  @Output() createNewNinja = new EventEmitter();
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e)
  };
  constructor() {}

  ngOnInit(): void {
    console.log('Render');
    const system = 'ios';


    // if (system === 'ios') {
    //
    // } else if(system == 'android') {
    //
    // }
  }

  arrayFunc(){
    const newNinja = Object.assign({}, this.ninja);
    // this.ninjas.push(newNinja);
    this.ninja.name = '';
    this.ninja.age = 0;
    this.ninja.color = '';
    // console.log('this.userArray', this.ninjas)

    this.createNewNinja.emit(newNinja);

  }
}
