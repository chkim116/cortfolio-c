import { Action, combineReducers, ThunkAction } from "@reduxjs/toolkit";
import auth from "./reducer/auth";
import cortfolio from "./reducer/cortfolio";

const rootReducer = combineReducers({
    auth,
    cortfolio,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default rootReducer;
