import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AuthReducer, ContactReducer, CarReducer } from "../redux/reducers";

const rootReducer = combineReducers({
  AuthReducer,
  ContactReducer,
  CarReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
