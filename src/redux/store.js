import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import coinListReducer from "./reducers/coinListReducer";

const rootReducer = combineReducers({
  coinListReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
