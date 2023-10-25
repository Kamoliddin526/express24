import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  LeftOutlined,
  HeartOutlined,
  StarOutlined,
  CarOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Modal } from "antd";

const Restaurants = () => {
  const navigate = useNavigate();
  const [hit, setHit] = useState([]);
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

  useEffect(() => {
    axios({
      url: "http://localhost:5000/delivery",
      method: "get",
    })
      .then((res) => setHit(res.data))
      .catch((err) => console.log(`The error is ${err}`));
  }, []);

  return (
    <div className="hit">
      <h1>Restaurants</h1>
      <div className="menus">
        <button onClick={showModal}>Favourites</button>
        <button onClick={showModal}>New</button>
        <button onClick={showModal}>Fast Food</button>
        <button onClick={showModal}>Aziatskaya</button>
        <button onClick={showModal}>Kofeynaya</button>
        <button onClick={showModal}>Pizzeria</button>
        <button onClick={showModal}>Burgernaya</button>
        <button onClick={showModal}>Yevropeyskaya</button>
        <div>
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
                border: "1px solid grey",
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
              <p style={{ margin: "15px 0" }}>
                By clicking the get code button you accept the terms and
                conditions
                <span>user agreement</span>
              </p>
              <button
                style={{
                  padding: "16px",
                  background: "grey",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                }}
                onClick={handleOk}
              >
                to get the code
              </button>
            </div>
          </Modal>
          <button>More </button>
        </div>
      </div>
      <div className="hit__cards">
        {hit.map((item, index) => (
          <Fragment>
            <div className="hit__card">
              <Link
                to={`/hit/card/${item.id}`}
                key={item.id}
                state={{ cardData: item }}
              >
                <img src={item.image} alt="" />
                <div className="heart__wrapper">
                  <span className="heart">
                    <HeartOutlined />
                  </span>
                </div>
                <div className="hit__card__wrp">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                  <div className="rate__wrp">
                    <span className="rate">
                      <StarOutlined />
                      {item.rate}
                    </span>
                    <span className="price">
                      <CarOutlined />
                      20.300 sum
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <Outlet />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
