import { configureStore, combineReducers } from "@reduxjs/toolkit";
import portfolioReducer from './project'

const rootReducer = combineReducers({
    portfolio: portfolioReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

