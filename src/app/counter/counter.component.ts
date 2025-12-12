import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, computed, DoCheck, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit,OnChanges,OnDestroy,AfterContentInit,AfterContentChecked,OnDestroy,DoCheck,AfterViewInit,AfterViewChecked {
  @Input() data:any 
  hide = true
  value:any
  preValue:any
  counter:any
  num = 0
  ngOnChanges(changes: SimpleChanges): void {


  this.value = this.data
   this.preValue = changes['data'].currentValue
   console.log(this.preValue);
   
  }
  ngOnInit(): void {
    console.log('onint');
  this.counter = setInterval(()=>{
  this.num = this.num + 1
  console.log(this.num);
  },1000)
   
    
  }
  ngDoCheck(): void {
console.log('docheck');

  }
  ngAfterContentInit(): void {
    console.log('aftercontentinit');
    
  }
  ngAfterContentChecked(): void {
  console.log('contentchecked');
  
  }
  ngAfterViewInit(): void {
    console.log('afterviewinit');
    
  }
  ngAfterViewChecked(): void {
    console.log('view');
    
  }
 
 
 

  ngOnDestroy(): void {
clearInterval(this.counter)

  }






  firstName = signal('rashid')
lastName = signal('hassain')
fullName = computed(()=> this.firstName() + ' '+ this.lastName())


change(){
  this.firstName.set('sufi')  
  this.lastName.set('khan')

}
refresh(){
  this.firstName.set('dddd')
  this.lastName.set('hsshh')
}
}
