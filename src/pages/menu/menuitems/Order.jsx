import { LeftOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div className="hit">
      <div className="hit__wrapper">
        <LeftOutlined className="out__left" />
        <button className="hit__btn" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
      <h1 className="order__dis">Discount 20,000 soum</h1>
      <p className="order__par"> 
        We are giving a discount of 20,000 soums on the first order over 100,000
        soums using the promo code BIR24
      </p>
    </div>
  );
};

export default Order;
