import { createSlice } from "@reduxjs/toolkit";

const foodsSlice = createSlice({
  name: "filterFoodsSlice",
  initialState: "",
  reducers: {
    setFilterValue: (state, action) => {
      return action.payload; // just replace state with new value
    },
  },
});

export const { setFilterValue } = foodsSlice.actions;
export default foodsSlice.reducer;
