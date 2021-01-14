import { Action, combineReducers, ThunkAction } from "@reduxjs/toolkit";
import auth from "./reducer/auth";

const rootReducer = combineReducers({
    auth,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default rootReducer;
