import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./dataslice";

const store = configureStore({
  reducer: {
    user: dataSlice.reducer
  }
});
export default store;
