import {FC} from 'react';
import {Col, Divider, Row} from "antd";
import Navbar from "../Navbar/Navbar";

const Layout: FC = ({children}) => {
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
                    {children}
                </Col>
            </Row>
            <Row
                gutter={[25, 25]}
                justify="center"
                align="bottom"
            >
                <Col span={24}>
                    <Divider/>
                    <footer
                        style={{
                            textAlign: 'center',
                            marginBottom: 25,
                        }}
                    >
                        <a href="http://vk.com/kxnkxv">kxnkxv</a>, 2021
                    </footer>
                </Col>
            </Row>
        </>
    );
};

export default Layout;