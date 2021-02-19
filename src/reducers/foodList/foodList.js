import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isFetching: false,
  foodItems: [
    {
      name: "raclette",
      tag: "réconfortant",
    },
    {
      name: "poulet rôti",
      tag: "classique",
    },
    {
      name: "rougail",
      tag: "épicé",
    },
    {
      name: "gratin de courgette",
      tag: "végétarien",
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
    addNewFoodItem(state, action) {
      state.isFetching = false;
      state.foodItems = [...state.foodItems, action.payload];
    },
  },
});

export { actions };
export default reducer;
