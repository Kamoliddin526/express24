import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MenuBar = () => {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();
  const [staticMenuPaths] = useState([
    "/hit",
    "/order",
    "/delivery",
    "/bonus",
    "/rating",
    "/childish",
    "/only",
  ]);

  useEffect(() => {
    axios({
      url: "http://localhost:5000/menu",
      method: "get",
    }).then((res) => {
      const fetchedMenu = res.data;
      const combinedMenu = [...staticMenuPaths, ...fetchedMenu];
      setMenu(combinedMenu);
    });
  }, [staticMenuPaths]);
  const handleImageClick = (item) => {
    if (item.routePath) {
      navigate(item.routePath);
    } else {
      console.error(`Item is missing a ${item.routePath} property.`);
    }
  };

  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="menu__card" key={item.routePath}>
          <img src={item.image} alt="" onClick={() => handleImageClick(item)} />
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default MenuBar;
