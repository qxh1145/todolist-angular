import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todoSignal = signal<Todo[]>([]);

  todos = this.todoSignal.asReadonly();

  addTodo(title: string) {
    if (title.trim() == '') {
      alert('task cannot empty');
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    this.todoSignal.update((prev) => [...prev, newTodo]);
    console.log(this.todoSignal());
  }
  deleteTodo(id: number) {
    this.todoSignal.update((prev) => prev.filter((item) => item.id !== id));
  }
  toggleComplete(id: number) {
    this.todoSignal.update((todo) =>
      todo.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
    console.log(this.todoSignal());
  }
}
