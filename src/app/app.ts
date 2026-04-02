import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoPageComponent } from './page/todo-page/todo-page.component';

@Component({
  selector: 'app-root',
  imports: [TodoPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-todolist');
}
