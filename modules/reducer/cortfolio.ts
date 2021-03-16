import { createSlice } from "@reduxjs/toolkit";
import { CortfolioType } from "../../@types";

interface CortfolioState {
    cortfolio: CortfolioType;
}

const initialState: CortfolioState = {
    cortfolio: {
        userId: "",
        avatarUrl: "",
        skills: [],
        project: [
            {
                name: "",
                thumb: "",
                description: "",
                gitLink: "",
                pageLink: "",
            },
        ],
        contact: {
            career: [
                {
                    companyName: "",
                    date: "",
                    task: "",
                },
            ],
            name: "",
            phone: "",
            email: "",
        },
    },
};

const cortfolio = createSlice({
    name: "cortfolio",
    initialState,
    reducers: {
        saveCortfolio: (state, { payload }) => {
            state.cortfolio = payload;
        },
        resetCortfolio: (state) => {
            state.cortfolio = initialState.cortfolio;
        },

        putimgRequest: (state) => {},
        putimgSuccess: (state) => {},
        putimgFailure: (state) => {},

        putSkillRequest: (state) => {},
        putSkillSuccess: (state) => {},
        putSkillFailure: (state) => {},

        putProjectRequest: (state) => {},
        putProjectSuccess: (state) => {},
        putProjectFailure: (state) => {},

        putContactRequest: (state) => {},
        putContactSuccess: (state) => {},
        putContactFailure: (state) => {},
    },
});

export const {
    saveCortfolio,
    resetCortfolio,
    putimgRequest,
    putimgSuccess,
    putimgFailure,
    putSkillRequest,
    putSkillSuccess,
    putSkillFailure,
    putProjectRequest,
    putProjectSuccess,
    putProjectFailure,
    putContactRequest,
    putContactSuccess,
    putContactFailure,
} = cortfolio.actions;

export default cortfolio.reducer;
