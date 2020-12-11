import React, { Component } from "react";
import "./App.css";
import FoodFinder from "./containers/FoodFinder";
import FoodForm from "./containers/FoodForm";
import { Provider } from "react-redux";

export default class Root extends Component {
  /**
   * Creates an instance of Root.
   * @param {Object} props Component props
   */
  constructor(props) {
    super(props);

    this.store = props.store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          Food Roulette
          <FoodFinder />
          <FoodForm />
        </div>
      </Provider>
    );
  }
}
