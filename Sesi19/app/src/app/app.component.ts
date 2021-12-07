import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  parentMessage = "Hallo ini parent";

  addCounter(){
    this.counter++;
  }

  addDecrement(){
    this.counter--;
  }
}
