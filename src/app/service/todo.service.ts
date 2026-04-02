import { Injectable, signal } from "@angular/core";
import { Todo } from "../model/todo.model";

@Injectable({providedIn: 'root'})
export class TodoService {
    private todoSignal = signal<Todo[]>([]);

    todos = this.todoSignal.asReadonly()

    addTodo(title: string){
        const newTodo: Todo ={
            id: Date.now(),
            title: title,
            completed: false
        };
        this.todoSignal.update(prev => [...prev, newTodo]);
    };
    deleteTodo(id: number){
        this.todoSignal.update(prev => prev.filter(item => item.id !== id))
    }
    
}