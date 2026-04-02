import { Component, input, output } from "@angular/core";
import { TodoService } from "../../service/todo.service";
import { Todo } from "../../model/todo.model";


@Component({
    selector: 'app-todo-item',
    standalone: true,
    templateUrl: './todo-item.component.html'
})

export class TodoItemComponent {
    data = input.required<Todo>();
    toggleStatus = output<number>();
    deleteItem = output<number>();
    toggleUpdate = output<number>();
}