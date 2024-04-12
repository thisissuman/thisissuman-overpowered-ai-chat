import React from "react";
import ChatMessage from "./ChatMessage";
import Input from "./Input";
import './mainchat.css'
const MainChat = () => {
  return (
    <div>
      <ChatMessage />
      <Input />
    </div>
  );
};

export default MainChat;
