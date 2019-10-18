import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private counterservice)

  title = 'counters';
  initialvalue=[12,5,8];
  reset(){
    this.initialvalue =[0,0,0];
  }
}
