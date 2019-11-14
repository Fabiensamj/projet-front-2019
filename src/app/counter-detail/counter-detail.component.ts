import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CounterService }  from '../counter.service';
import { Counter } from '../counter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {

  @Input() position:number;
  counter: Counter = new Counter();
  
  constructor(
    private route: ActivatedRoute,
    private counterService: CounterService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCounter();
  }

  getCounter() {
    this.counterService.getCounter(this.position)
      .subscribe(counter => {
        this.counter = counter;
      });
  }

  increment() {
    this.counterService.increment(this.counter.id)
      .subscribe(counter => {
        this.counter.value = counter.value;
      });
  }
   /*increment():Observable<Counter>{
     console.log(this.counterService.increment(53).subscribe(counter => this.value = counter));
     
    return this.counterService.increment(this.counter.id);
  }*/
}