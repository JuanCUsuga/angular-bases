import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3> Contador: {{conuter}} </h3>
    <button type="button" (click)="increaseBy(1)">+1</button>
    <button type="button" (click)="resetCounter()">Resect</button>
    <button type="button" (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public conuter: number = 10;

  increaseBy( value: number ):void {
    this.conuter += value;
  }

  resetCounter():void {
    this.conuter = 10;
  }
}
