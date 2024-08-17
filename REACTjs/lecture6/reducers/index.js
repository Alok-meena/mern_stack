import { combineReducers } from "redux";
import taskReducer from "./taskReducer.js";

const rootReducer= combineReducers({
    tasks:taskReducer,
});

export default rootReducer;
