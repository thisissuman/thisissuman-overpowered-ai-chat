import { configureStore } from "@reduxjs/toolkit";
import sendSlice from "./sendSlice";
const store = configureStore({
  reducer: {
    send: sendSlice,
  },
});

export default store;
