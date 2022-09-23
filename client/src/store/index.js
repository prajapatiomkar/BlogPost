import { configureStore, applyMiddleware, combineReducers} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";

const rootReducers = combineReducers({
    AuthReducer,
})
const middlerwares = [thunkMiddleware]
const  Store = configureStore(rootReducers,applyMiddleware(...middlerwares))

export default Store;
