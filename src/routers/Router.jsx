import { Suspense, lazy } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuBar from "../pages/menu/Menu";

const Hit = lazy(() => import("../pages/menu/menuitems/Hit"));
const CardDetail = lazy(() => import("../pages/menu/menuitems/CardHit"));
const Order = lazy(() => import("../pages/menu/menuitems/Order"));
const Delivery = lazy(() => import("../pages/menu/menuitems/Delivery"));
const Bonus = lazy(() => import("../pages/menu/menuitems/Bonus"));
const Childish = lazy(() => import("../pages/menu/menuitems/Childish"));
const Rating = lazy(() => import("../pages/menu/menuitems/Rating"));
const Only = lazy(() => import("../pages/menu/menuitems/Only"));
const TheLoaf = lazy(() => import("../pages/shop/shopitems/theLoaf"));
const KidsPlate = lazy(() => import("../pages/shop/shopitems/kidsPlate"));
const Mart = lazy(() => import("../pages/shop/shopitems/Mart"));
const Sportion = lazy(() => import("../pages/shop/shopitems/Sportion"));
const Kitchen = lazy(() => import("../pages/shop/shopitems/Kitchen"));
const Butcoin = lazy(() => import("../pages/shop/shopitems/Butcoin"));
const Zooplaneta = lazy(() => import("../pages/shop/shopitems/Zooplaneta"));

const Routers = () => {
  return (
    <Suspense fallback="Loading">
      <Routes>
        <Route path="/" element={<MenuBar />} />
        <Route path="/hit" element={<Hit />}></Route>
        <Route path="/hit/card/:id" element={<CardDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/childish" element={<Childish />} />
        <Route path="/only" element={<Only />} />
        <Route path="/loaf" element={<TheLoaf />} />
        <Route path="/plate" element={<KidsPlate />} />
        <Route path="/mart" element={<Mart />} />
        <Route path="/sportion" element={<Sportion />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/butcoin" element={<Butcoin />} />
        <Route path="/planeta" element={<Zooplaneta />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
