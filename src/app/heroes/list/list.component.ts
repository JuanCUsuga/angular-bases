import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string [] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America', 'La viuda negra', 'La pantera negra', 'Alcón', 'At-Man', 'Doctor Strange', 'Wanda', 'Visión', 'Bucky'];
  public delectedHero?: string;

  removeLastHero():void {
    this.delectedHero = this.heroNames.pop();
  }
}
