import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  initialvalue=[12,5,8];
  constructor( private httpClient: HttpClient) { }
  baseUrl = 'https://lp4asgadot.herokuapp.com/counters/'
  reset(){
    this.initialvalue =[0,0,0];
  }
  /*incremement(position:number): number{
    this.initialvalue[position]++;
    return this.initialvalue[position];

  }*/
  increment(): Observable<Counter>{
    
    this.httpClient.patch("https://lp4asgadot.herokuapp.com/counters/53.json",{"value" : 1}).subscribe();
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/53.json");
}
  
  getCounterValue(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>(this.baseUrl+"53.json")
  }
  
} 
