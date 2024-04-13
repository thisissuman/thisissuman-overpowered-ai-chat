import React from "react";
import "./header.css";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <p>Overpowered</p>
        <img src={assets.user_icon} alt="" />
      </div>
    </div>
  );
};

export default Header;
