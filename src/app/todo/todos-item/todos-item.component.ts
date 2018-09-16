import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { ToggleAction, EditAction, RemoveAction } from '../todo-actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInput') textInputElemt: ElementRef;

  chkField: FormControl;
  txtField: FormControl;

  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.txtField = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges.subscribe(value => {
      this.store.dispatch(new ToggleAction(this.todo.id));
    });

  }
  
  edit() {
    this.editing = true;
    setTimeout(() => {
      this.textInputElemt.nativeElement.select();
    });
  }

  endEdit() {
    this.editing=false;

    if(this.txtField.value === this.todo.text) return;
    if(this.txtField.invalid) {
      this.txtField.setValue(this.todo.text);
      return;
    };

    this.store.dispatch(new EditAction(this.todo.id, this.txtField.value));
  }

  remove() {
    this.store.dispatch(new RemoveAction(this.todo.id));
  }
}
