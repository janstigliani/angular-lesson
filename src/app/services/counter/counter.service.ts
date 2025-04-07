import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  counter = signal(0);

  double = computed (()=> this.counter()*2);

  ciao = signal("hello")

  interval?:number = -1;

  constructor() { 

    effect(() => {
      console.log("il contatore vale", this.counter(), this.double());

      // console.log(this.ciao());
    } )

    // console.log("il contatore vale", this.counter(), this.double());

    // this.counter.set(12);

    // this.ciao.set("miao")

    // console.log("il contatore ora vale", this.counter(), this.double());

    // this.counter.update((oldvalue) => oldvalue+1);

    // console.log("il contatore aumentato vale", this.counter(), this.double());

    // this.counter.update((oldvalue) => oldvalue+1);
    // setTimeout(() => {
    //   this.counter.update((number) => number+100);
    // }, 300);
    

    // console.log("il contatore aumentato 2 volte vale", this.counter(), this.double());

  }

  addOne(){
    this.counter.update((oldValue) => oldValue+1);
  }

  subtractOne() {
    this.counter.update((oldValue) => oldValue-1);
  }

  startInterval() {
    // while (true) {
    //   this.counter.update((oldValue) => oldValue+1);
    //   if (this.shouldStop === true) {
        
    //   }
    // }
    if (this.interval === -1) {

      this.interval= window.setInterval(() => {
        this.counter.update((oldValue) => oldValue+1);
      }, 1);
    }
  }

  stopInterval() {
    window.clearInterval(this.interval);  
    this.interval = -1;
  }
}
