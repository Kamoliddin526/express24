import React, { useState } from "react";
import { Button, Modal } from "antd";
import Location from "../../assets/icons/location.png";
const NavModal = () => {
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
    <div>
      <Button
        className="btn search__button"
        style={{ height: "50px" }}
        onClick={showModal}
      >
        <img className="location__img" src={Location} alt="location" />
        <h3>Tashkent, Yakkasaroy</h3>
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
        width={800}
      >
        <h1>Delivery Address</h1>
        <p>
          <input
            style={{
              margin: "15px 0",
              padding: "16px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid grey",
            }}
            type="text"
            placeholder="Enter Address"
          />
        </p>
        <iframe
          className="frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47971.579493347184!2d69.20227916012617!3d41.28223525649549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8b2eef294b%3A0x74d629c3b43f5834!2sYakkasaray%20District%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1696490502968!5m2!1sen!2s"
          height="330"
          style={{ border: "none", borderRadius: "10px", width: '100%' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <button
          style={{
            padding: "15px",
            display: "block",
            margin: "10px auto",
            width: "100%",
            background: "yellow",
            borderRadius: "5px",
            border: "none",
          }}
          onClick={handleOk}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
};
export default NavModal;
