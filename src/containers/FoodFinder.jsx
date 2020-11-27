import React, { useState } from "react";
import { food } from "../food.json";

export const FoodFinder = () => {
  const [foodIdea, setFoodIdea] = useState("");

  const getFood = () => {
    const randomIndex = Math.floor(Math.random() * food.length);
    setFoodIdea(food[randomIndex]);
  };

  return (
    <div>
      <div> What do you want to eat?</div>
      <button onClick={() => getFood()}>Find for me</button>
      <div>{foodIdea?.name}</div>
    </div>
  );
};
