import React from "react";
import ExpressLogo from "../../assets/icons/express-logo.webp";
import NavModal from "./NavModal";
import NavDropdown from "./NavDropdown";
import Search from "../../assets/icons/search.jpg";
import NavAccountModal from "./NavAccountModal";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="nav__logo">
          <img src={ExpressLogo} alt="" />
        </div>
        <div className="nav__search">
          <div className="search">
            <img className="search__img" src={Search} alt="" />
            <input
              type="text"
              placeholder="Establishment, dish, product or cuisine"
            />
          </div>
          <button className="search__btn">Search</button>
          <div className="search-none">
            <NavModal />
          </div>
        </div>
        <div className="search-display" style={{ display: "none" }}>
          <NavModal />
        </div>
      </div>
      <div className="navbar__right">
        <NavDropdown />
        <NavAccountModal />
      </div>
    </div>
  );
};

export default Navbar;
