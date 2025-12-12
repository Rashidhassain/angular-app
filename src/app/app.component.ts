import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'new-project';
visible = true
list:any = [
  {
    name:'rashif'
  },
  {
    name:'hassain'
  },
  {
    name:'sufi'
  }
]
  fisrtName = signal('rashid')


  change(){
    this.fisrtName.set('hassain')
  }
}
