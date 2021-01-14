import { useCallback } from "react";
import { useSelector } from "react-redux";
import HomeForm from "../components/home/HomeForm";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { RootState } from "../modules/rootReducer";
import styled from "@emotion/styled";

const AppLayout = styled.main``;

export default function Home() {
    const { auth } = useSelector((state: RootState) => state.auth);

    const handleUpdate = useCallback(() => {}, []);

    return (
        <>
            <Header />
            <AppLayout>
                <HomeForm auth={auth} />;
                <Footer />
            </AppLayout>
        </>
    );
}
