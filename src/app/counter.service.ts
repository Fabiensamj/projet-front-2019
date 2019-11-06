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
  incremement(position:number): number{
    this.initialvalue[position]++;
    return this.initialvalue[position];

  }
  
  getCounterValue(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>(this.baseUrl+id+".json")
  }
  updateCounterValue(id: number): Observable<void> {
    return this.httpClient.put<void>(this.baseUrl+id+".json",Counter)
    
  }
}
