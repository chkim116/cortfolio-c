import Link from "next/link";
import styled from "@emotion/styled";

const Container = styled.div`
    ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
`;

const Button = styled.button`
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

const HomeForm = () => {
    return (
        <Container>
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
        </Container>
    );
};

export default HomeForm;
