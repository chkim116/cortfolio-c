import styled from "@emotion/styled";

export const Title = styled.h1`
    width: fit-content;
    text-align: center;
    margin: 0 auto;
    font-weight: 300;
    font-size: 34px;
    position: relative;
    padding-bottom: 0.5em;
    &:after {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        content: "";
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: red;
    }
`;
