import React, { useState } from "react";
import "./input.css";
import { assets } from "../../assets/assets";

const Input = ({getdataHandler}) => {
  const [input, setinput] = useState("");
  const submitHandeleer = () => {
    getdataHandler(input);
  };
  return (
    <div className="main-bottom">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter prompt here"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <div>
          <img src={assets.gallery_icon} alt="" />
          <img src={assets.mic_icon_icon} alt="" />
          <img src={assets.send_icon} alt="" onClick={submitHandeleer} />
        </div>
      </div>
      <p className="bottom-info">Overpowered may display incorrect info</p>
    </div>
  );
};

export default Input;
