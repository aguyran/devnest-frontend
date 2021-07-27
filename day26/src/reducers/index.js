import emailReducer from "./emailReducer";
import nameReducer from "./nameReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ emailReducer, nameReducer });

export default rootReducer;
