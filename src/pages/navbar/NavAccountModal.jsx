import React, { useState } from "react";
import { Modal, Space } from "antd";
const NavAccountModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Space className="btn nav__user" onClick={showModal}>
        <i class="bi bi-person-square"></i>
        Profile
      </Space>
      <Modal
        open={isModalOpen}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <h2 style={{ fontSize: "30px" }}>Enter your phone number</h2>
        <p className="acc-pg">and receive a confirmation code</p>
        <input
          style={{
            padding: "13px",
            borderRadius: "10px",
            width: "80%",
            margin: "25px auto",
            border: '1px solid grey'
          }}
          type="text"
          placeholder="Phone Number"
        />
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="click"
        >
          <p style={{ margin: '15px 0'}}>
            By clicking the get code button you accept the terms and conditions
            <span>user agreement</span>
          </p>
          <button
            style={{ padding: "16px", background: "grey", border: "none", borderRadius: '5px', width: '100%'}}
            onClick={handleOk}
          >
            to get the code
          </button>
        </div>
      </Modal>
    </>
  );
};
export default NavAccountModal;
