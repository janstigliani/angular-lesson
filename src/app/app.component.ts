import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './components/controls/controls.component';
import { TestComponent } from './components/test/test.component';
import { DirectivesComponent } from "./components/directives/directives.component";
import { LifecycleComponent } from "./components/lifecycle/lifecycle.component";
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, CommonModule, ControlsComponent, TestComponent, DirectivesComponent, LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-lesson';
  back = "violet"

  changeAttributes() {
    const lifecycle = document.querySelector(`app-lifecycle`);
    console.log(lifecycle);
    this.back = "black"
  }
  
}
