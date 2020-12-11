import { combineReducers } from "@reduxjs/toolkit";
// import { connectRouter } from "connected-react-router";
// import { createBrowserHistory } from "history";

import foodListReducer from "./foodList";

// export const history = createBrowserHistory();

const rootReducer = combineReducers({
  //   router: connectRouter(history),
  foodList: foodListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
