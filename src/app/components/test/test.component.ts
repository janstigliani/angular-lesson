import { Component, computed, input, Input } from '@angular/core';

@Component({
  // selector: 'button[button-type="superButton"]',
  selector: 'app-test',
  imports: [],
  // template:`<button><input class="pippo" type="text" value="pippo"></button>`,
  templateUrl: './test.component.html',
  // styles: `
  // span{
  //   background-color: gold;
  // }
  // `,
  styleUrl: './test.component.scss'
})
export class TestComponent {
  _input2 = "viva angular!!";

  @Input() input1:string="sucaaa";

  @Input() set input2(value:string){
    if(value.length > 3){
      this._input2 = value;
    }
    
  }

  // input3 = input("")

  upperInput3= computed(() => this.input3().toUpperCase());

  input3 = input("", {transform: (value:string) => value.replaceAll("i", "o")});
  
  nomeSensato = input("", {alias: "nome-sensato"});

  @Input({transform: (value:string) => value + " Garibaldi"}) input4 = ""
}
