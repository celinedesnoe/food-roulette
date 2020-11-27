import React, { useState } from "react";
import { food } from "../food.json";

interface FoodIdea {
  name: string;
}

const FoodFinder = () => {
  const [foodIdea, setFoodIdea] = useState<FoodIdea | undefined>(undefined);

  const getFood = () => {
    const randomIndex: number = Math.floor(Math.random() * food.length);
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

export default FoodFinder;
