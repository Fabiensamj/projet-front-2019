import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialvalue = [49, 72, 48];
  public positionCounter = [49, 72, 48];
  constructor( private httpClient: HttpClient) { }
  baseUrl = 'https://lp4asgadot.herokuapp.com/counters/'
  allurl = "https://lp4asgadot.herokuapp.com/counters.json"
  reset(){
    this.initialvalue =[0,0,0];
  }
  /*incremement(position:number): number{
    this.initialvalue[position]++;
    return this.initialvalue[position];

  }*/
  increment(id:number): Observable<Counter>{
    
    this.httpClient.patch(this.baseUrl+id+".json",{"value" : 1}).subscribe();
    return this.httpClient.get<Counter>(this.baseUrl+id+".json");
}
  
  getCounter(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>(this.baseUrl+id+".json")
  }
  getCounters(): Observable<Counter[]> {
    return this.httpClient.get<Counter[]>(this.allurl);
  }
  
} 
