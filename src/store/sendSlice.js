import { createSlice } from "@reduxjs/toolkit";
import runChat from "../config/Gemini";

const sendSlice = createSlice({
  name: "send",
  initialState: [
    {
      cart: "Hi",
    },
  ],
  reducers: {
    getItem: (state, action) => {
      const onSent = async (prompt) => {
        await runChat(prompt);
      };

      onSent(action.payload);
    },
  },
});

console.log(sendSlice);
export const { getItem } = sendSlice.actions;
export default sendSlice.reducer;
