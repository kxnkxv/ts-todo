import {FC} from 'react';
import {Divider, Layout, Menu} from "antd";
import {NavLink} from "react-router-dom";

const {Header, Footer, Content} = Layout;

const CustomLayout: FC = ({children}) => {
  return (
    <Layout>
      <Header
        style={{
          background: "#fff"
        }}
      >
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">
            <NavLink to="/">todos</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/about">about</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          paddingTop: 25,
          paddingLeft: 25,
          paddingBottom: 25,
          paddingRight: 25,
        }}
      >
        {children}
      </Content>
      <Footer>
        <Divider/>
        <a href="https://vk.com/kxnkxv">kxnkxv</a>, 2021
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
