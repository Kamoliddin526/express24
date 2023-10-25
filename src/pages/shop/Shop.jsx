import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopBar = () => {
  const [shop, setShop] = useState([]);
  const navigate = useNavigate();
  const [staticShopPaths] = useState([
    "/loaf",
    "/plate",
    "/mart",
    "/sportion",
    "/kitchen",
    "/butcoin",
    "/planeta",
  ]);

  useEffect(() => {
    axios({
      url: "http://localhost:5000/shops",
      method: "get",
    }).then((res) => {
      const fetchedShop = res.data;
      const combinedShop = [...staticShopPaths, ...fetchedShop];
      setShop(combinedShop);
    });
  }, [staticShopPaths]);
  const handleImageClick = (item) => {
    if (item.routePath) {
      navigate(item.routePath);
    } else {
      console.error(`Item is missing a ${item.routePath} property.`);
    }
  };

  return (
    <div className="shop">
      {shop.map((item) => (
        <div className="menu__card" key={item.routePath}>
          <img src={item.image} alt="" onClick={() => handleImageClick(item)} />
        </div>
      ))}
    </div>
  );
};

export default ShopBar;
