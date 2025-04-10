import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  sonoFelicio = true;

  currentClasses = {
    triste: true,
    felice: false,
    monospace: true,
  };

  currentStyles = {
    "font-size": this.sonoFelicio?"50px":"20px",
    color: this.sonoFelicio?"magenta":"green",
  };

  elements = ["pippo Baudo", "pippo Inzaghi", "pippo Franco", "pippo e Basta"]

  changeMood() {

    this.sonoFelicio = !this.sonoFelicio;
    this.currentClasses.triste = !this.currentClasses.triste;
    this.currentClasses.felice = !this.currentClasses.felice;

    this.currentStyles = {
      "font-size": this.sonoFelicio?"50px":"20px",
      color: this.sonoFelicio?"magenta":"green",
    };
  }

  imtrue = true;

  changeIfElse() {
    this.imtrue = !this.imtrue;
  }

  triplechoice = 1;
}
