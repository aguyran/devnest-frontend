import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import themeReducer from "./themeReducer";

export const rootReducer = combineReducers({
  place: placeReducer,
  placeData: placeDataReducer,
  theme: themeReducer,
});
