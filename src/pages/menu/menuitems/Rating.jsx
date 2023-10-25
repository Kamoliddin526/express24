import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LeftOutlined,
  HeartOutlined,
  StarOutlined,
  CarOutlined,
} from "@ant-design/icons";
import axios from "axios";

const Rating = () => {
  const navigate = useNavigate();
  const [hit, setHit] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:5000/rating",
      method: "get",
    })
      .then((res) => setHit(res.data))
      .catch((err) => console.log(`The error is ${err}`));
  }, []);

  return (
    <div className="hit">
      <div className="hit__wrapper">
        <LeftOutlined className="out__left" />
        <button className="hit__btn" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
      <div className="hit__header">
        <h1>Enough for everyone!</h1>
        <p>Profitable and satisfying sets for the whole family</p>
      </div>
      <div className="hit__cards">
        {hit.map((item) => (
          <div className="hit__card">
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
                <span
                  className="price"
                  style={{ background: "#16C647", color: "white" }}
                >
                  <CarOutlined />
                  <span>20.300 sum</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
