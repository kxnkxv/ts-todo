import {Button, Card, Col, DatePicker, Empty, Input, Popconfirm, Row, Space, Typography} from 'antd';
import React, {FC, useState} from 'react';
import TodoStore from "../../store/todo/todo"
import {observer} from "mobx-react-lite";
import moment from "moment";

const TodoList: FC = observer(() => {
  const [tempTitle, setTempTitle] = useState<string>()
  const [tempDescription, setTempDescription] = useState<string>()
  const [tempDate, setTempDate] = useState<any>()

  return (
    <Space direction="vertical" style={{width: "100%", height: "100%"}}>
      {
        TodoStore.todos.length !== 0
          ? TodoStore.todos.map((todo) => {
            return (
              <Card key={todo.id}
                    style={{width: "100%", marginTop: 16}}
                    actions={[
                      <Popconfirm
                        title={[
                          <Space direction="vertical">
                            <Input defaultValue={todo.title} onChange={(event) => setTempTitle(event.target.value)}/>
                            <Input.TextArea defaultValue={todo.description}
                                            onChange={(event) => setTempDescription(event.target.value)}/>
                            <DatePicker defaultValue={moment(todo.date)} onChange={(date) => setTempDate(date)}/>
                          </Space>
                        ]}
                        // @ts-ignore
                        onConfirm={() => TodoStore.editTodo(todo.id, tempTitle, tempDescription, tempDate)}
                        okText="Save"
                        cancelText="Cancel"
                      >
                        <Button type="link" key={todo.id}>
                          Edit
                        </Button>
                      </Popconfirm>,
                      <Button key={todo.id} type="link" onClick={() => {
                        TodoStore.markDone(todo.id)
                      }}>
                        {
                          todo.checked
                            ? "Mark undone"
                            : "Mark done"
                        }
                      </Button>,
                      <Button key={todo.id} danger type="link" onClick={() => {
                        TodoStore.deleteTodo(todo.id)
                      }}>
                        Delete
                      </Button>,
                      ]}
                >
                  <Card.Meta
                    title={[
                      <Row
                        align="middle"
                        justify="space-between"
                      >
                        {
                          todo.checked
                            ? <>
                              <Col>
                                <Typography.Title delete level={4}>{todo.title}</Typography.Title>
                              </Col>
                              <Col>
                                <Typography.Text delete>
                                  {/*Start: <b>{todo.date}</b>*/}
                                </Typography.Text>
                              </Col>
                            </>
                            : <>
                              <Col>
                                <Typography.Title level={4}>{todo.title}</Typography.Title>
                              </Col>
                              <Col>
                                <Typography.Text>
                                  {/*Start: <b>{todo.date}</b>*/}
                                </Typography.Text>
                              </Col>
                            </>
                        }
                      </Row>
                    ]}
                    description={
                      todo.checked
                        ? <Typography.Paragraph delete>
                          {todo.description}
                        </Typography.Paragraph>
                        : <Typography.Paragraph>
                          {todo.description}
                        </Typography.Paragraph>
                    }
                  />
                </Card>
              )
            })
            : <Empty/>
        }
      </Space>
    )
  }
)

export default TodoList;
