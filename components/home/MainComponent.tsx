import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { UserType } from "../../@types";
import { Button } from "../../pages";
import Calendar from "./Calendar";
import UserProfile from "./UserProfile";

const AppLayout = styled.main`
    ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
`;

const MainComponent = ({ auth }: { auth: UserType | null }) => {
    return (
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
        </AppLayout>
    );
};

export default MainComponent;
