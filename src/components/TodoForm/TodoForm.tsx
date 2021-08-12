import React, {FC} from 'react';
import {Button, Form, Input, message, Space} from "antd";
import {ITodo} from "../../types/types";

interface TodoFormProps {
    addTodo: (newTodo: ITodo) => void
}

const TodoForm: FC<TodoFormProps> = ({addTodo}) => {
    const [form] = Form.useForm();
    const inputRef = React.useRef<any>(null);

    const onFinish = (values: ITodo) => {
        addTodo({title: values.title, checked: false, id: Date.now()})
        message.success("Todo added")
        form.resetFields();
        inputRef.current!.focus({
            cursor: 'start',
        });
    };

    return (
        <Form form={form} name="todo-form" onFinish={onFinish}>
            <Form.Item name="title" rules={[{required: true}]}>
                <Input
                    ref={inputRef}
                />
            </Form.Item>
            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default TodoForm;