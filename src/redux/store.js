import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  AuthReducer,
  ContactReducer,
  CarReducer,
  CarListReducer,
} from "../redux/reducers";

const rootReducer = combineReducers({
  AuthReducer,
  ContactReducer,
  CarReducer,
  CarListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
