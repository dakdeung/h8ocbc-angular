import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Output() newTodoEvent = new EventEmitter<Todo>();

  // inputTodo: string = "";
  isSubmit = false;

  todoForm = new FormGroup({
    inputTodo: new FormControl('',[Validators.required, Validators.minLength(10)])
  })

  get inputTodo(){
    return this.todoForm.get('inputTodo');
  }

  addTodo(){
    this.isSubmit = true;
    if(!this.inputTodo?.invalid){
      const todo:Todo = {
        context: this.todoForm.value.inputTodo,
        completed: false,
        edited: false
      };
      this.newTodoEvent.emit(todo)
    }
  }

  handleIsSubmitState(){
    if(this.isSubmit == true){
      this.isSubmit = false
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
