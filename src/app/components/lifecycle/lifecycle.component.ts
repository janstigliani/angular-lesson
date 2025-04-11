import { CommonModule } from '@angular/common';
import { Component, input, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent {

  textColor= input("violet", {alias: "text-color"});
  backgroundColor = input("crimson", {alias: "background-color"});
  style = {
    color: this.textColor(),
    "background-color": this.backgroundColor()
  }

  constructor() {
    console.log("constructor") 
  }

  ngOnInit() {
    console.log("init")
    // this.style = {
    //   color: this.textColor(),
    //   "background-color": this.backgroundColor()
    // }
  }

  ngAfterViewInit(){
    console.log("after view init")
  }

  ngOnDestroy(){
    console.log("destroy")
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
      this.style = {
        color: this.textColor(),
        "background-color": this.backgroundColor()
      }
    }
  }

}
