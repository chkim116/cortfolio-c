import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../@types";
import { authFetch, logoutFetch, checkFetch } from "../api";
import { AppThunk } from "../rootReducer";

export interface AuthState {
    isLoading: boolean;
    isLogin: boolean;
    isError: string | null;
    auth: UserType | null;
}

const initialState: AuthState = {
    isLoading: false,
    isLogin: false,
    isError: null,
    auth: {
        _id: "",
        avatarUrl: "",
        repos: "",
        followers: "",
        followings: "",
        name: "",
        email: "",
        url: "",
        userId: "",
        bio: null,
        blog: "",
        location: null,
        company: null,
    },
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getAuthRequest: (state) => {
            state.isLogin = false;
            state.isLoading = true;
            state.isError = null;
        },
        getAuthSuccess: (state, { payload }) => {
            state.isLogin = true;
            state.isLoading = false;
            state.isError = null;
            state.auth = payload;
        },
        getAuthFailure: (state, { payload }) => {
            state.isLogin = false;
            state.isLoading = false;
            state.isError = payload;
        },
        logoutRequest: (state) => {
            state.isLoading = true;
            state.isError = null;
        },
        logoutSuccess: (state) => {
            state.isLogin = false;
            state.isLoading = false;
            state.isError = null;
            state.auth = null;
        },
        logoutFailure: (state, { payload }) => {
            state.isLoading = false;
            state.isError = payload;
        },

        checkAuthSuccess: (state, { payload }) => {
            state.isLogin = true;
            state.isError = null;
            state.auth = payload;
        },
    },
});

export const {
    getAuthRequest,
    getAuthSuccess,
    getAuthFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    checkAuthSuccess,
} = auth.actions;

export default auth.reducer;

export const getAuth = (code: string): AppThunk => async (dispatch) => {
    try {
        dispatch(getAuthRequest());
        const results = await authFetch(code);
        dispatch(getAuthSuccess(results));
    } catch (err) {
        dispatch(getAuthFailure(err));
    }
};

export const logout = (): AppThunk => async (dispatch) => {
    try {
        dispatch(logoutRequest());
        await logoutFetch();
        dispatch(logoutSuccess());
    } catch (err) {
        dispatch(logoutFailure(err));
    }
};

export const checkAuth = (): AppThunk => async (dispatch) => {
    try {
        const results = await checkFetch();
        dispatch(checkAuthSuccess(results));
    } catch (err) {
        console.error(err);
    }
};
