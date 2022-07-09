import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';

export default function prepStore(initialState={}) {
    // Prep middlewares
    const middlewares = []
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    // Configure store
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(middlewares),
        preloadedState: initialState
    })

    // Start saga
    sagaMiddleware.run(rootSaga);

    return store;
}