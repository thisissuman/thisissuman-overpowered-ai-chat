import React from "react";
import ChatMessage from "./ChatMessage";
import Input from "./Input";
import "./mainchat.css";
import Header from "../Header";
const MainChat = () => {
  return (
    <div className="main">
      <Header />
      <ChatMessage />
      <Input />
    </div>
  );
};

export default MainChat;
