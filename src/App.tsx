import {FC, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Col, Layout, Row} from "antd";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import {ITodo} from "./types/types";

const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

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
            <Row
                gutter={[25, 25]}
                justify="center"
                align="top"
            >
                <Col span={24}>
                    <Navbar/>
                </Col>
            </Row>
            <Row
                gutter={[25, 25]}
                justify="center"
                style={{
                    flex: 1,
                    marginTop: 25,
                    marginBottom: 25,
                }}
            >
                <Col span={22}>
                    <TodoForm addTodo={(newTodo) => setTodos(prevState => [...prevState, newTodo])}/>
                    <TodoList todos={todos} onCheck={checkedHandler} onRemove={deleteHandler}/>
                </Col>
            </Row>
            <Row
                gutter={[25, 25]}
                justify="center"
                align="bottom"
            >
                <Col span={24}>
                    <Layout.Footer
                        style={{textAlign: 'center'}}
                    >
                        kxnkxv, 2021
                    </Layout.Footer>
                </Col>
            </Row>
        </>
    );
}

export default App;
