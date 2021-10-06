import React, {FC} from 'react';
import {Button, Card, DatePicker, Form, Input, Space} from "antd";
import {ITodo} from "../../types/types";
import {v4 as uuidv4} from "uuid";
import TodoStore from "../../store/todo/todo"

const TodoForm: FC = () => {
  const [form] = Form.useForm();
  const title = React.useRef<any>(null);
  const onFinish = (values: ITodo) => {
    TodoStore.addTodo({
      id: uuidv4(),
      title: values.title,
      checked: false,
      date: values.date,
      description: values.description
    })
    form.resetFields();
    title.current!.focus({
      cursor: 'start',
    });
  };

  return (
    <Card>
      <Form
        form={form}
        name="todo-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true
            },
            () => ({
              validator(_, value) {
                let sameTitle = false;
                if (!value) {
                  return Promise.resolve();
                } else {
                  TodoStore.todos.forEach((todo) => {
                    if (todo.title === value) {
                      sameTitle = true;
                    }
                  })
                }
                if (sameTitle) {
                  return Promise.reject(new Error('TODO with same title already exist'))
                } else {
                  return Promise.resolve()
                }
              },
            }),
          ]}
          label="Title">
          <Input
            ref={title}
            placeholder="Write TODO title..."
          />
        </Form.Item>
        <Form.Item name="description" rules={[{required: true}]} label="Description">
          <Input.TextArea
            placeholder="Write TODO description..."
          />
        </Form.Item>
        <Form.Item name="date" rules={[{required: true}]} label="Start date">
          <DatePicker/>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>

  );
};

export default TodoForm;
