import {Menu} from "antd";
import {FC} from "react";
import {Link} from "react-router-dom"

const Navbar: FC = () => {
    return (
        <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">
                <Link to="/">TODO</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/">Information</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;