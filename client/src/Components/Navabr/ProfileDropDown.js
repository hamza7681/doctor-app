import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function ProfileDropdown() {
  const { name } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item key={0} onClick={() => navigate("/profile")}>Profile</Menu.Item>
      <Menu.Item key={1} onClick={() => navigate("/orders")}>My Orders</Menu.Item>
      <Menu.Item key={2} onClick={() => dispatch({ type: "LOGOUT" })}>Logout</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu}>
        <span
          className="ant-dropdown-link treatment"
          onClick={(e) => e.preventDefault()}
        >
          {name} <DownOutlined className="dropdown_icon" />
        </span>
      </Dropdown>
    </>
  );
}

export default ProfileDropdown;
