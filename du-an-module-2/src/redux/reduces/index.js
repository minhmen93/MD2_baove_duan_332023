import { combineReducers } from "redux";
import { products } from "./products";
import { user } from "./users";

export const rootReducer = combineReducers({ products, user });