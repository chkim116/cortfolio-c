import { createSlice } from "@reduxjs/toolkit";
import { authFetch, logoutFetch, checkFetch } from "../api";
import { AppThunk } from "../rootReducer";

export interface UserType {
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
    blog: string;
    location: string | null;
    company: string | null;
}

export interface AuthState {
    isLoading: boolean;
    isLogin: boolean;
    isError: string | null;
    auth: UserType;
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
        jwtToken: "",
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
