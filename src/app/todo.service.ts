import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/tutorial.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<Todo[]>  {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
