import { configureStore } from "@reduxjs/toolkit";
//import { createStore } from 'redux'
import rootReducers from "./reducers/rootReducers";
import  videoDataSaga from "./middleware/videosSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ 
    reducer: rootReducers,
    middleware: () => [sagaMiddleware] 
});

sagaMiddleware.run(videoDataSaga);
export default store;