import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  title = "compteur 1"
  @Input() position: number;
  value: Counter;
  constructor(public counterService: CounterService) { }

  ngOnInit() {
    console.log("call counter "+this.value)
    if(this.position == 1) this.counterService.getCounterValue(53).subscribe(counter => this.value = counter)
    if(this.position == 2) this.counterService.getCounterValue(57).subscribe(counter => this.value = counter)
    if(this.position == 3) this.counterService.getCounterValue(58).subscribe(counter => this.value = counter)

  }


  increment() {
    if(this.position == 1) this.counterService.increment(53).subscribe(counter => this.value = counter);
    if(this.position == 2) this.counterService.increment(57).subscribe(counter => this.value = counter);
    if(this.position == 3) this.counterService.increment(58).subscribe(counter => this.value = counter);
    console.log("this.position est "+this.position)
  }
}
