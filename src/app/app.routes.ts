import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Counter1Component } from './counter1/counter1.component';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
{
path:'',
redirectTo:'counter1',
pathMatch:'full'
},
{
    path:'counter',
    component: CounterComponent
},
{
    path:'test',
    component: TestComponent
},
{
    path:'counter1',
    component: Counter1Component
}
// {
//     path:'demo',
//     component: DemoComponent
// }
    
];
