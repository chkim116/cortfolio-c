import React from "react";
import styled from "@emotion/styled";

const Background = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 500;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 500px;
    z-index: 600;
    background-color: ${({ theme }) => theme.white};
    border-radius: 12px;
    overflow: scroll;
    @media ${({ theme }) => theme.tablet} {
        width: 550px;
        height: 500px;
    }

    @media ${({ theme }) => theme.phone} {
        width: 400px;
        height: 400px;
    }
`;

const ModalComponent = ({
    onClick,
    children,
}: {
    onClick: () => void;
    children: React.ReactChild;
}) => {
    return (
        <div>
            <Background onClick={onClick} />
            <Modal>{children}</Modal>
        </div>
    );
};

export default ModalComponent;
