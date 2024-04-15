import React from "react";
import ChatMessage from "./ChatMessage";
import Input from "./Input";
import "./mainchat.css";
import Header from "../Header";
import { useState } from "react";
import { getItem } from "../../store/sendSlice";
import { useDispatch } from "react-redux";

const MainChat = () => {
  const dispatch = useDispatch();

  const submitHandeler = (data) => {
    console.log(data);
  };

  return (
    <div className="main">
      <Header />
      <ChatMessage />
      <Input getdataHandler={submitHandeler} />
    </div>
  );
};

export default MainChat;
