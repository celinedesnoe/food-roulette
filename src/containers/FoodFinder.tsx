import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../reducers/rootReducer";

interface FoodIdea {
  name: string;
}

const FoodFinder = () => {
  const { foodItems } = useSelector((state: RootState) => state.foodList);

  const [foodIdea, setFoodIdea] = useState<FoodIdea | undefined>(undefined);

  const getFood = () => {
    const randomIndex: number = Math.floor(Math.random() * foodItems.length);
    setFoodIdea(foodItems[randomIndex]);
  };

  return (
    <div>
      <div> What do you want to eat?</div>
      <button onClick={() => getFood()}>Find for me</button>
      <div>{foodIdea?.name}</div>
    </div>
  );
};

export default FoodFinder;
