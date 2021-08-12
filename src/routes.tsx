import React, {FC, Suspense} from 'react';
import {Col, Row, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {Route, Switch} from 'react-router-dom';

const Todos = React.lazy(() => import("./pages/todo/todos"));
const About = React.lazy(() => import("./pages/about/about"));
const NotFound = React.lazy(() => import("./pages/notFound/notFound"));

const Routes: FC = () => {
    const spinner = <LoadingOutlined style={{fontSize: 50}} spin/>;

    const Loading = () => {
        return (
            <Row
                align="middle"
                justify="center"
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <Col>
                    <Spin indicator={spinner}/>
                </Col>
            </Row>
        );
    };

    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                <Route exact path="/" component={Todos}/>
                <Route path="/about" component={About}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Suspense>
    );
};

export default Routes;