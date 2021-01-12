import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { readSync } from "fs";
import { AppThunk } from "../rootReducer";

interface UserType {
    _id: string;
    avatarUrl: string;
    repos: string;
    followers: string;
    followings: string;
    bio: string | null;
    name: string;
    email: string;
    url: string;
    userId: string;
    jwtToken?: string;
}

const initialState = {
    isLoading: false,
    isLogin: false,
    isError: null,
    auth: {
        _id: "",
        avatarUrl: "",
        repos: "",
        followers: "",
        followings: "",
        bio: "",
        name: "",
        email: "",
        url: "",
        userId: "",
        jwtToken: "",
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

const authFetch = (code) => {
    return Axios.post(`/auth`, {
        code,
    }).then((res) => res.data);
};

const logoutFetch = () => {
    return Axios.get("/logout").then((res) => res.data);
};

const checkFetch = () => {
    return Axios.get("/check").then((res) => res.data);
};

export const getAuth = (code): AppThunk => async (dispatch) => {
    try {
        dispatch(getAuthRequest());
        const results = await authFetch(code);
        dispatch(getAuthSuccess(results)); // 성공
    } catch (err) {
        dispatch(getAuthFailure(err)); // 실패
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch(logoutRequest());
        await logoutFetch();
        dispatch(logoutSuccess()); // 성공
    } catch (err) {
        dispatch(logoutFailure(err)); // 실패
    }
};

export const checkAuth = () => async (dispatch) => {
    try {
        const results = await checkFetch();
        dispatch(checkAuthSuccess(results));
    } catch (err) {
        console.error(err);
    }
};
