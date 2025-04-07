import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './components/controls/controls.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, CommonModule, ControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-lesson';
}
