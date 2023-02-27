import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./styles.css";

function DropdownComp() {
  const menu = (
    <Menu>
      <Menu.Item>Treatment item one</Menu.Item>
      <Menu.Item>Treatment item two</Menu.Item>
      <Menu.Item>Treatment item three</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu}>
        <span
          className="ant-dropdown-link treatment"
          onClick={(e) => e.preventDefault()}
        >
          Treatments <DownOutlined className="dropdown_icon"/>
        </span>
      </Dropdown>
    </>
  );
}

export default DropdownComp;
