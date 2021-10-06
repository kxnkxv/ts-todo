import {Button, Card, Col, Empty, message, Row, Space, Typography} from 'antd';
import {FC} from 'react';
import TodoStore from "../../store/todo/todo"
import moment from "moment";
import {observer} from "mobx-react-lite";

const TodoList: FC = observer(() => {
    return (
      <Space direction="vertical" style={{width: "100%", height: "100%"}}>
        {
          TodoStore.todos.length !== 0
            ? TodoStore.todos.map((todo) => {
              return (
                <Card key={todo.id}
                      style={{width: "100%", marginTop: 16}}
                      actions={[
                        <Button type="link" onClick={() => message.error("Editing in develop")}>
                          Edit
                        </Button>,
                        <Button type="link" onClick={() => {
                          TodoStore.markDone(todo.id)
                        }}>
                          {
                            todo.checked
                              ? "Mark undone"
                              : "Mark done"
                          }
                        </Button>,
                        <Button danger type="link" onClick={() => {
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
                                  Start: <b>{moment(todo.date)}</b>
                                </Typography.Text>
                              </Col>
                            </>
                            : <>
                              <Col>
                                <Typography.Title level={4}>{todo.title}</Typography.Title>
                              </Col>
                              <Col>
                                <Typography.Text>
                                  Start: <b>{todo.date}</b>
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
