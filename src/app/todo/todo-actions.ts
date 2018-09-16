import { Action } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const ADD_TODO = '[Todo] Add todo';
export const TOGGLE_TODO = '[Todo] Toggle todo';
export const TOGGLE_ALL = '[Todo] Toggle all todo';
export const EDIT_TODO = '[Todo] Edit todo';
export const REMOVE_TODO = '[Todo] Remove todo';
export const CLEAR_COMPLETED = '[Todo] clear completed todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public text: string) {

    }
}

export class ToggleAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {

    }
}

export class ToggleALLAction implements Action {
    readonly type = TOGGLE_ALL;

    constructor(public completed: boolean) {

    }
}

export class EditAction implements Action {
    readonly type = EDIT_TODO;

    constructor(public id: number, public text: string) {

    }
}

export class RemoveAction implements Action {
    readonly type = REMOVE_TODO;

    constructor(public id: number) {

    }
}

export class ClearAction implements Action {
    readonly type = CLEAR_COMPLETED;

}

export type Actions = AddTodoAction | ToggleAction | ToggleALLAction | EditAction | RemoveAction |  ClearAction;