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

export default actions;
