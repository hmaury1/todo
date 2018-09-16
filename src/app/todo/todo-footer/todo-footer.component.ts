import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions'
import * as fromTodo from '../../todo/todo-actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  allowedFilters: fromFilter.allowedFilter[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.allowedFilter ;
  pendingTodoCount: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTodoCount = state.todos.filter(item => !item.completed).length;
    })
  }

  applyFilter(filter: fromFilter.allowedFilter) {
    this.store.dispatch(new fromFilter.SetFiltroAction(filter));
  }

  clearCompleted() {
    this.store.dispatch(new fromTodo.ClearAction());
  }
}
