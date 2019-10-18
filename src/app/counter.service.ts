import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  initialvalue=[12,5,8];

  constructor() { }

  reset(){
    this.initialvalue =[0,0,0];
  }
  incremement(position:number): number{
    this.initialvalue[position]++;
    return this.initialvalue[position];

  }
}
