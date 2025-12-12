import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  cityArray: any = [{
    value: 1,
    name: 'bangalore',
    state: 'Karnataka',
    Active: true
  },
  {
    value: 2,
    name: 'chennai',
    state: 'Tamil nadu',
    Active: true
  },
  {
    value: 3,
    name: 'pune',
    state: 'Maharshtra',
    Active: false
  },
  {
    value: 4,
    name: 'nellore',
    state: 'Andhra Pradesh',
    Active: true
  }
  ]
  isVisible = false
  statusCases: any = ''
}
