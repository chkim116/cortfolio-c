import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
    max-width: 600px;
    position: relative;
    width: 100%;
`;

const Button = styled.button<{ deleteOn: boolean }>`
    width: 55px;
    height: 20px;
    border-radius: 10px;
    position: absolute;
    text-align: center;
    right: 0;
    font-size: ${({ theme }) => theme.ss};
    border: 1px solid ${({ theme }) => theme.darkWhite};
    ${({ deleteOn }) =>
        deleteOn
            ? css`
                  background-color: #333;
                  color: #ffffff;
              `
            : css`
                  background-color: #ffffff;
                  color: #333;
              `}
`;

interface Props {
    deleteOn: boolean;
}

const DeleteButton = ({ deleteOn }: Props) => {
    return (
        <Container>
            <Button deleteOn={deleteOn} type="button">
                삭제
            </Button>
        </Container>
    );
};

export default DeleteButton;
