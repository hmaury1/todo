import * as fromTodo from './todo-actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Play Fortnite');
const todo2 = new Todo('Learn Angular');
const todo3 = new Todo('Work');
const initState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = initState, action: fromTodo.Actions): Todo[] {

    switch(action.type) {
        case fromTodo.ADD_TODO:
            let todo = new Todo(action.text); 
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            return state.map(item => {
                if(item.id == action.id){
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
            });

        case fromTodo.TOGGLE_ALL:
            return state.map(item => {
                return {
                    ...item,
                    completed: action.completed
                };
            });

        case fromTodo.EDIT_TODO:
            return state.map(item => {
                if(item.id == action.id){
                    return {
                        ...item,
                        text: action.text
                    };
                } else {
                    return item;
                }
            });

        case fromTodo.REMOVE_TODO:
            return state.filter(item => item.id !== action.id );
        
        case fromTodo.CLEAR_COMPLETED:
            return state.filter(item => !item.completed );
            
        default: 
            return state;
    }
}