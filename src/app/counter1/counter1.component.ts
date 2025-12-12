import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-counter1',
  standalone: true,
  imports: [CounterComponent,DemoComponent],
  templateUrl: './counter1.component.html',
  styleUrl: './counter1.component.scss'
})
export class Counter1Component {
  value:any
  submit(val:any){

this.value = val.value
  }
}
