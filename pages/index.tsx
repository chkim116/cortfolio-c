import { useCallback } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { RootState } from "../modules/rootReducer";
import styled from "@emotion/styled";

import MainComponent from "../components/home/MainComponent";

export const Button = styled.button`
    padding: 0.8em;
    width: 150px;
    margin: 0.4em 0;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.darkWhite};
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};

    &:hover {
        background-color: ${({ theme }) => theme.darkWhite};
    }
`;

export default function Home() {
    const { auth } = useSelector((state: RootState) => state.auth);

    const handleUpdate = useCallback(() => {}, []);

    return (
        <>
            <Header />
            <MainComponent auth={auth} />
            <Footer />
        </>
    );
}
