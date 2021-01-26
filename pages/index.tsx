import { useCallback } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { RootState } from "../modules/rootReducer";
import styled from "@emotion/styled";
import UserProfile from "../components/home/UserProfile";
import Calendar from "../components/home/Calendar";
import Link from "next/link";

const AppLayout = styled.main`
    ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
`;

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
            <AppLayout>
                {auth?.userId ? (
                    <>
                        <UserProfile auth={auth} />

                        {auth.userId && <Calendar userId={auth.userId} />}
                    </>
                ) : null}
                <Link href={`/cortfolio/chkim116`}>
                    <a>
                        <Button type="button">Cortfolio</Button>
                    </a>
                </Link>
                <Link href="/howto">
                    <a>
                        <Button type="button">How to Cortfolio</Button>
                    </a>
                </Link>
                <Footer />
            </AppLayout>
        </>
    );
}
