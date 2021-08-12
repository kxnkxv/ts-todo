import {Button, Checkbox, List, message, Popconfirm, Space, Typography} from 'antd';
import {FC} from 'react';
import {ITodo} from "../../types/types";

interface TodoListProps {
    todos: ITodo[];
    onCheck: (id: number) => void;
    onRemove: (id: number) => void;
}

function confirm(e: any) {
    message.success('Todo successfully deleted');
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
                        <Popconfirm
                            title="Are you sure to delete this todo?"
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger type="link">
                                Delete
                            </Button>
                        </Popconfirm>
                    </Space>
                </List.Item>
            )}
        />
    );
};

export default TodoList;