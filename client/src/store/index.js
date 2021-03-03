import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
  user: userReducer,
  post: postReducer,
})

const store = createStore(
  reducers, applyMiddleware(thunk)
);

export default store;
