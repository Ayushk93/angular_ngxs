import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Todo} from '../models/tutorial.model';
import {AddTodo, DeleteTodo, GetTodos, SetSelectedTodo, UpdateTodo} from '../actions/todo.action';
import {TodoService} from '../todo.service';
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class TodoStateModel {
    todos: Todo[];
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todos: [],
    }
})

@Injectable()
export class TodoState {

    constructor(private todoService: TodoService) {
    }

    @Selector()
    static getTodoList(state: TodoStateModel) {
        return state.todos;
    }

    @Action(GetTodos)
    getTodos({getState, setState}: StateContext<TodoStateModel>) {
        console.log('here')
        return this.todoService.fetchTodos().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                todos: result,
            });
        }));
    }

}