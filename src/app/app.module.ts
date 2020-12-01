import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { IncementDecrementComponent } from './incement-decrement/incement-decrement.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { HomeComponent } from './home/home.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { TrainingComponent } from './training/training.component';
import { DirectoryComponent } from './directory/directory.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    IncementDecrementComponent,
    ListGroupComponent,
    HomeComponent,
    FormComponentComponent,
    TrainingComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
