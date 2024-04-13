import React from "react";
import "./input.css";
import { assets } from "../../assets/assets";
const Input = () => {
  return (
    <div className="main-bottom">
      <div className="search-box">
        <input type="text" placeholder="Enter prompt here" />
        <div>
          <img src={assets.gallery_icon} alt="" />
          <img src={assets.mic_icon_icon} alt="" />
          <img src={assets.send_icon} alt="" />
        </div>
      </div>
      <p className="bottom-info">
        Overpowered may display incorrect info
      </p>
    </div>
  );
};

export default Input;
