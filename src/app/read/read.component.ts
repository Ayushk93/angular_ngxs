import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { TutorialState } from './../state/tutorial.state';
import { TodoState } from './../state/todo.state';
import { Tutorial, Todo } from './../models/tutorial.model';
import { RemoveTutorial } from './../actions/tutorial.actions';
import { GetTodos } from './../actions/todo.action';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {
  areCoursesLoadedSub: Subscription;
  // tutorials$: Observable<Tutorial>;
  
  @Select(TutorialState.getTutorial) tutorials$: Observable<Tutorial[]>;
  @Select(TodoState.getTodoList) todos$: Observable<Todo[]>;
  
  constructor(private store: Store) { 
    // this.tutorials$ = this.store.select(state => state.tutorial.tutorial)
  }

  delTutorial(name: string) {
    this.store.dispatch(new RemoveTutorial(name));
  }

  ngOnInit() {
    this.store.dispatch(new GetTodos());
  }

}
