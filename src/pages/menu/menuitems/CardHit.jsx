import {
  CarOutlined,
  HeartOutlined,
  LeftOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CardHit = ({ cardDetail }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [count, setCount] = useState("20.300");
  const { cardData } = location.state || {};
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    if (cardData) {
      // Check if the item is already in the cart
      const existingItem = cartItems.find((item) => item.id === cardData.id);
      if (existingItem) {
        // If it's already in the cart, update its quantity
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === cardData.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        // If it's not in the cart, add it with a quantity of 1
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...cardData, quantity: 1 },
        ]);
      }
    }
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setCount(count * count);
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="cardHit">
      <div className="hit__wrapper">
        <LeftOutlined className="out__left" />
        <button className="hit__btn" onClick={() => navigate("/hit")}>
          Back
        </button>
      </div>
      <div className="wrapper__cart">
        <div className="cardHit__left">
          {cardData && (
            <>
              <div className="left__img-wrp">
                <img src={cardData.image} alt="" />
              </div>
              <h3>{cardData.title}</h3>
              <div className="wrp">
                <span className="rate">
                  <StarOutlined />
                  {cardData.rate}
                </span>
                <p>Delivery time 35-40 minute</p>
                <div className="heart__wrapper">
                  <span className="heart">
                    <HeartOutlined />
                  </span>
                </div>
                <div className="rate__wrp">
                  <span className="price">20.300 sum</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="cardHit__right">
          <div>
            <h1>Basket</h1>
          </div>
          <div className="right__cart">
            {cartItems.length === 0 ? (
              <p>The products you add will appear here</p>
            ) : (
              cartItems.map((item) => (
                <div
                  style={{ display: "flex" }}
                  key={item.id}
                  className="cart-item"
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <h5>{count}</h5>
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="delivery">
          <h3>Delivery</h3>
        </div>
        <div className="takeaway">
          <h3>Takeaway</h3>
        </div>
      </div>
      <button onClick={addToCart}>Joint</button>
    </div>
  );
};

export default CardHit;
