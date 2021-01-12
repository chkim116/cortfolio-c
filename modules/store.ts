import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducer from "./rootReducer";

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
