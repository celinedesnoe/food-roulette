import { actions } from "../../reducers/foodList";

import mockFoodList from "../../food.json";

export function fetchFoodList() {
  return (dispatch) => {
    dispatch(actions.requestFoodList());

    dispatch(
      actions.receiveFoodList({
        foodItems: mockFoodList,
      })
    );
  };
}

export function addFoodItem(values) {
  return (dispatch) => {
    dispatch(actions.addNewFoodItem(values));
  };
}

export default actions;
