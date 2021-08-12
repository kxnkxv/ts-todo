import {FC, useEffect, useState} from 'react';
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";
import {ITodo} from "../../types/types";

const Todos: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const checkedHandler = (id: number) => {
        setTodos(prevState => prevState.map(todo => {
            if (todo.id === id) {
                todo.checked = !todo.checked
            }
            return todo
        }))
    }

    const deleteHandler = (id: number) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    return (
        <>
            <TodoForm addTodo={(newTodo) => setTodos(prevState => [...prevState, newTodo])}/>
            <TodoList todos={todos} onCheck={checkedHandler} onRemove={deleteHandler}/>
        </>
    );
};

export default Todos;