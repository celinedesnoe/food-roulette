import React from "react";
import "./App.css";
import FoodFinder from "./containers/FoodFinder";
import FoodForm from "./containers/FoodForm";

function App() {
  return (
    <div className="App">
      Food Roulette
      <FoodFinder />
      <FoodForm />
    </div>
  );
}

export default App;
