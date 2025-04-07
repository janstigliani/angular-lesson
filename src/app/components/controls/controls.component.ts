import { Component, effect, inject } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {
  counterServ = inject(CounterService);

  plusClicked(){
    this.counterServ.addOne();
  }

  minusClicked() {
    this.counterServ.subtractOne();
  }

  play() {
    this.counterServ.startInterval();
  }

  stop() {
    this.counterServ.stopInterval();
  }
}
