import styled from "@emotion/styled";

const Button = styled.button`
    width: 150px;
    padding: 0.4em 0.6em;
    border: 1px solid ${({ theme }) => theme.black};
    margin: 0.6em 0;
    font-weight: bold;
    &:hover {
        border: 1px solid ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.white};
    }
`;

interface Props {
    authId: string | undefined;
    cortfolioId: string;
    onClick: any;
    children: React.ReactChild;
}

const EditButton = ({ authId, onClick, cortfolioId, children }: Props) => {
    return (
        <div style={{ textAlign: "center" }}>
            {authId === cortfolioId && (
                <Button type="button" onClick={onClick}>
                    {children}
                </Button>
            )}
        </div>
    );
};

export default EditButton;
