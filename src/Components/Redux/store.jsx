import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./foodsListSlice"; // update the path

const store = configureStore({
  reducer: {
    filterFoods: foodsReducer,
  },
});

export default store;
