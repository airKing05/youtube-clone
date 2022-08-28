import { configureStore } from "@reduxjs/toolkit";
//import { createStore } from 'redux'
import rootReducers from "./reducers/rootReducers";

const store = configureStore({ reducer: rootReducers, });

export default store;