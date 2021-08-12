import {Menu} from "antd";
import {FC} from "react";
import {NavLink} from "react-router-dom"

const Navbar: FC = () => {
    return (
        <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">
                <NavLink to="/">todos</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to="/about">about</NavLink>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;