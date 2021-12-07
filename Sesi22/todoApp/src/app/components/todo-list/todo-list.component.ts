import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  isEditable= false;
  isDone = false;
  todos:Todo[]=[];

  constructor() { }

  todoForm = new FormGroup({
    inputTodo: new FormControl('',[Validators.required, Validators.minLength(10)])
  })

  get inputTodo(){
    return this.todoForm.get('inputTodo');
  }

  ngOnInit(): void {
    this.todos = [
      {
        context: "First todo",
        completed: false,
        edited: false
      },
      {
        context: "Second todo",
        completed: false,
        edited:false
      }
    ]
  }

  toggleDone(id:number){
      this.todos.map((v,i) => {
        if(i == id) v.completed = !v.completed;
        return v;
      })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  onEditable(id:number){
    this.todos.map((v,i) => {
      if(i == id) {
        v.edited = !v.edited;
      }
      return v;
    })
  }

  onSaved(id:number){
    this.isDone = true;
    if(!this.inputTodo?.invalid){
      this.todos.map((v,i) => {
        if(i == id) {
          v.edited = !v.edited;
          v.context = this.todoForm.value.inputTodo;
        }
        return v;
      })
    }
  }

  handleIsSubmitState(){
    if(this.isDone == true){
      this.isDone = false
    }
  }
}
