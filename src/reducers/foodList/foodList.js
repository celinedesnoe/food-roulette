import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isFetching: false,
  foodItems: [
    {
      name: "raclette",
    },
    {
      name: "poulet rôti",
    },
    {
      name: "rougail",
    },
  ],
};

const { actions, reducer } = createSlice({
  name: "foodList",
  initialState,
  reducers: {
    requestFoodList(state) {
      state.isFetching = true;
      state.foodItems = [];
    },
    receiveFoodList(state, action) {
      state.isFetching = false;
      state.foodItems = action.payload.foodItems;
    },
  },
});

export { actions };
export default reducer;
