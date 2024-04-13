import React from "react";
import "./chatmessage.css";
import { assets } from "../../assets/assets";

const ChatMessage = () => {
  return (
    <div className="main-container">
      <div className="greet">
        <p>
          <span>Hello, Suman</span>
        </p>
        <p>How Can I help you</p>
      </div>
      <div className="cards">
        <div className="card">
          <p>Suggest butiful places to see on an upcoming road trip</p>
          <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
          <p>Suggest butiful places to see on an upcoming road trip</p>
          <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
          <p>Suggest butiful places to see on an upcoming road trip</p>
          <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
          <p>Suggest butiful places to see on an upcoming road trip</p>
          <img src={assets.code_icon} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default ChatMessage;
