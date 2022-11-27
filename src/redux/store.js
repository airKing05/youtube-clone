import { applyMiddleware, configureStore, compose } from "@reduxjs/toolkit";
//import { createStore } from 'redux'
import rootReducers from "./reducers/rootReducers";
import  videoDataSaga from "./middleware/videosSaga";
import rootSaga from "./middleware/rootSaga";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({ 
    reducer: rootReducers,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;