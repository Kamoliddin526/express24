import React from "react";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: "Русский",
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: "English",
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "O'zbekcha",
    key: "3",
  },
];
const NavDropdown = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <Space onClick={(e) => e.preventDefault()} className="d-block nav__drop">
      <i class="bi bi-globe"></i>
      English
    </Space>
  </Dropdown>
);
export default NavDropdown;
