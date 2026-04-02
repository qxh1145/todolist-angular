import { Component, inject } from "@angular/core";
import { TodoItemComponent } from "../todo-item/todo-item.component"; 
import { TodoService } from "../../service/todo.service";

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: "./todo-list.component.html",
    imports: [TodoItemComponent]
})
export class TodoListComponent {
    todoService = inject(TodoService)
}