import { combineReducers } from "redux";
import { userReducer } from "./users/userReducer";

const reducers = combineReducers({
    userReducer,
});

export default reducers;