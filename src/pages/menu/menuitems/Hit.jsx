import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  LeftOutlined,
  HeartOutlined,
  StarOutlined,
  CarOutlined,
} from "@ant-design/icons";
import axios from "axios";

const Hit = () => {
  const navigate = useNavigate();
  const [hit, setHit] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:5000/season",
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
        <h1>Hits of the season</h1>
        <p>With a benefit of up to 35%</p>
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

export default Hit;
