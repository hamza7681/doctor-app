import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import AuthReducer from "./AuthRedcuer";
import ProfileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
  ProductReducer,
  CartReducer,
  AuthReducer,
  ProfileReducer
});

export default rootReducer;
