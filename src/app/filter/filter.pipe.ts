import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import * as fromAction from './filter.actions';


@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: fromAction.allowedFilter): any {
    switch(filter){
      case 'completed':
        return todos.filter(item => item.completed);
      case 'pending':
        return todos.filter(item => !item.completed);
      default: 
        return todos;
    }
  }
}
