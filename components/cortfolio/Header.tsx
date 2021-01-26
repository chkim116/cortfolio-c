import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
    width: 100%;
    z-index: 300;
    position: fixed;
    display: flex;
    justify-content: space-around;
    height: 60px;
    align-items: center;
    margin: 0 auto;
    font-weight: 300;
    font-size: ${({ theme }) => theme.ls};
    background-color: #9dc6ec;
    color: ${({ theme }) => theme.white};
    ul {
        display: flex;
        li {
            padding: 0.4em 0.6em;
            margin: 0.2em;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.darkWhite};
                border-radius: 12px;
            }
        }
    }
`;

const CortfolioHeader = ({ userId }: { userId: string }) => {
    return (
        <Header>
            <div>{userId}</div>
            <ul>
                <li>Home</li>
                <li>Skils</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </Header>
    );
};

export default CortfolioHeader;
