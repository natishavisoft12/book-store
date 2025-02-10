import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "./bookSlice"
import commentreducer from "./commentSlice"
import authreducer from "./authSlice"

const store = configureStore({
  reducer: {
    book: bookreducer,
    auth:authreducer,
    comment:commentreducer
  },
});
export default store;
