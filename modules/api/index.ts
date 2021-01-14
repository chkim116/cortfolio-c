import Axios from "axios";

// 유저 관련

export const authFetch = (code) => {
    return Axios.post(`/auth`, {
        code,
    }).then((res) => res.data);
};

export const logoutFetch = () => {
    return Axios.get("/logout").then((res) => res.data);
};

export const checkFetch = () => {
    return Axios.get("/check").then((res) => res.data);
};

export const updateUser = (username) => {
    return Axios.post("/update", { username }).then((res) => res.data);
};
