import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "./bookSlice"
import authreducer from "./authSlice"

const store = configureStore({
  reducer: {
    book: bookreducer,
    auth:authreducer
  },
});
export default store;
