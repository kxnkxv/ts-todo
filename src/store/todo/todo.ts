import {autorun, makeAutoObservable} from "mobx";
import {ITodo} from "../../types/types";
import {message} from "antd";

class TodoStore {
  todos: ITodo[] = JSON.parse(localStorage.getItem("todos") as string) || [];

  constructor() {
    makeAutoObservable(this);
    autorun(
      () => {
        if (this.todos.length !== 0) {
          localStorage.setItem("todos", JSON.stringify(this.todos))
        }
      }
    )
  }

  markDone = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked
      }
      return todo
    })
  }

  deleteTodo = (id: string) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  addTodo(newTodo: ITodo) {
        this.todos = this.todos.concat(newTodo)
    message.success("New TODO added")
  }
}

export default new TodoStore();
