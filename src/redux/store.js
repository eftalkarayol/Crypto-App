import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import coinListReducer from "./reducers/coinListReducer";
import coinInfoReducer from "./reducers/coinInfoReducer";

const rootReducer = combineReducers({
  coinListReducer,
  coinInfoReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
