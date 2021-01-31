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
    onClick: any;
    children: React.ReactChild;
}

const EditButton = ({onClick, children }: Props) => {
    return (
        <div style={{ textAlign: "center" }}>
                <Button type="button" onClick={onClick}>
                    {children}
                </Button>
        </div>
    );
};

export default EditButton;
