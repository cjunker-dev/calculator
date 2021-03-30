import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'calculator';
  num1: number = 0;
  num2: number = 0;
  answer: number = 0;
  submit(): void{
    this.answer= this.num1 + this.num2;
  }
}
