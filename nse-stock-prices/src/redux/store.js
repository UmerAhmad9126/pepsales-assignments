import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { stockReducer } from "./reducer";
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({
    stockReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));