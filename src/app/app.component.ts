import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'My First Angular Application';
  name = 'John';

  changeTitle(name: string) {
    this.title = name;
  }
}
