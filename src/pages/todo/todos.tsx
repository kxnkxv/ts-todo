import {FC} from 'react';
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";

const Todos: FC = () => {
  return (
    <>
      <TodoForm/>
      <TodoList/>
    </>
  );
};

export default Todos;
