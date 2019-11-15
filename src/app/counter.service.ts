import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Counter } from './counter';
import { NgxActionCableBroadcaster, NgxActionCableService } from 'ngx-actioncable';
import { Observable, Subscription } from 'rxjs';
import { ActionCableService, Channel } from 'angular2-actioncable';
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialvalue = [49, 72, 48];
  public positionCounter = [49, 72, 48];

  subscription: Subscription;

  private counterObservable: Map<number, Observable<Counter>> = new Map()

  constructor(private httpClient: HttpClient, private cableService: ActionCableService) { 
    // Open a connection and obtain a reference to the channel
    const channel: Channel = this.cableService
    .cable('wss://lp4asgadot.herokuapp.com/cable')
    .channel('CountersChannel ', {});

      // Subscribe to incoming messages
      this.subscription = channel.received().subscribe(message => {
          console.log(message)
      });
  }
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
  getCounterValue(id : number): Observable<Counter> {
    if (! this.counterObservable.has(id)) {
      this.counterObservable[id] = new EventEmitter<Counter>() 
    }
    this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters"+this.positionCounter[id]+".json")
                   .subscribe(counter =>  this.counterObservable[id].emit(counter))
    return this.counterObservable[id]
}
  getCounter(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>(this.baseUrl+id+".json")
  }
  getCounters(): Observable<Counter[]> {
    return this.httpClient.get<Counter[]>(this.allurl);
  }
  
    
  }
  

