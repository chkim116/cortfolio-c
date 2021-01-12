import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 55;
    background-color: ${({ theme }) => theme.white};
    height: 100vh;
`;

const Message = styled.div`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -15%);
`;

const Text = styled.div`
    margin-top: 0.6em;
    font-size: ${({ theme }) => theme.ms};
`;

const CallbackForm = () => {
    return (
        <Container>
            <Message>
                <h1>Welcome to Cortfolio.</h1>
                <Text>로그인 진행 중입니다. 잠시 기다려주세요.</Text>
            </Message>
        </Container>
    );
};

export default CallbackForm;
