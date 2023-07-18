import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  name: string;
  age: number;
  constructor() {
    this.title = 'welcome';
    this.name = 'Vitech Solutions';
    (this.age = 10), 'years old';
  }
}
