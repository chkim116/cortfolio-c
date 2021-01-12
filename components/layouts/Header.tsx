import Link from "next/link";
import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";
import { checkAuth, logout } from "../../modules/reducer/auth";

const Container = styled.header`
    ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
`;

const Logo = styled.div`
    flex: 1;
    font-size: ${({ theme }) => theme.xls};
`;

const SearchForm = styled.form`
    flex: 2;
    text-align: center;

    input {
        padding: 0.5em 1em;
        width: 250px;
        text-align: left;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border: 1px solid #eef6fd;
        background-color: #eef6fd;
    }
    button {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 0.5em 1em;
        color: ${({ theme }) => theme.black};
        border: 1px solid ${({ theme }) => theme.darkWhite};
    }
`;

const Nav = styled.div`
    text-align: right;
    flex: 1;

    button {
        border-radius: 12px;
        padding: 0.5em 0.2em;
        width: 65px;
        font-size: ${({ theme }) => theme.ls};
        margin-left: 4px;
        text-align: center;
        &:hover {
            color: ${({ theme }) => theme.darkWhite};
        }
    }
`;

const Header = () => {
    const { isLogin, auth } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    return (
        <Container>
            <Logo>
                <Link href="/">CORTFOLIO</Link>
            </Logo>
            <SearchForm>
                <input type="text" placeholder="깃허브 ID로 검색" />
                <button type="submit">검색</button>
            </SearchForm>

            <Nav>
                {!isLogin ? (
                    <Link
                        href={`https://github.com/login/oauth/authorize?client_id=16e55bcb353c5ebe989c&redirect_uri=http://localhost:3000/auth/github/callback`}
                    >
                        <a>
                            <button type="button">Login</button>
                        </a>
                    </Link>
                ) : (
                    <>
                        <Link href={`/cortfolio/${auth.userId}`}>
                            <a>
                                <button type="button">ME</button>
                            </a>
                        </Link>
                        <button type="button" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}
            </Nav>
        </Container>
    );
};

export default Header;
