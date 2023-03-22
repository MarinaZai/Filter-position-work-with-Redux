import { filterReducer } from "./filters/filters-reducers";
import { positionReducer } from "./positions/position-reducers";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
