import {Button, Checkbox, List, Space, Typography} from 'antd';
import {FC} from 'react';
import {ITodo} from "../../types/types";

interface TodoListProps {
    todos: ITodo[];
    onCheck: (id: number) => void;
    onRemove: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({todos, onCheck, onRemove}) => {
    return (
        <List
            header={null}
            footer={null}
            dataSource={todos}
            renderItem={todo => (
                <List.Item key={todo.id}>
                    <Space wrap>
                        <div onClick={() => onCheck(todo.id)} style={{cursor: "pointer"}}>
                            <Space wrap>
                                <Checkbox checked={todo.checked}/>
                                <Typography.Text>
                                    {todo.title}
                                </Typography.Text>
                            </Space>
                        </div>
                        <Button danger type="link" onClick={() => onRemove(todo.id)}>
                            Delete
                        </Button>
                    </Space>
                </List.Item>
            )}
        />
    );
};

export default TodoList;