import {
  FacebookOutlined,
  InstagramOutlined,
  SendOutlined,
} from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <ul>
            <li>About us</li>
            <li>Contacts</li>
            <li>Terms of use</li>
          </ul>
          <h4>Support service: +998 71 200 40 01</h4>
        </div>
        <div className="footer__right">
          <InstagramOutlined className="instagram" />
          <FacebookOutlined  className="instagram"/>
          <SendOutlined className="instagram" />
          <h3>C 2023 Express24</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
