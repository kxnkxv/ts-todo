import {makeAutoObservable} from "mobx";
import {ITodo} from "../../types/types";
import {message} from "antd";

class TodoStore {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  markDone = (id: string) => {
    const todo = this.todos.find(todo => todo.id === id)
    if (todo) {
      todo.checked = !todo.checked
    }
  }

  editTodo = (id: string, title: string, description: string, date: any) => {
    const todo = this.todos.find(todo => todo.id === id)
    if (todo) {
      todo.title = title
      todo.description = description
      todo.date = date
    }
  }

  deleteTodo = (id: string) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  addTodo(newTodo: ITodo) {
    this.todos.push(newTodo)
    message.success("New TODO added")
  }

  getTodo(id: string) {
    this.todos.find(todo => todo.id === id)
  }
}

export default new TodoStore();
