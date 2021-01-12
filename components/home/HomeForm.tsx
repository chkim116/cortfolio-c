import Link from "next/link";
import styled from "@emotion/styled";
import ReactTooltip from "react-tooltip";
import { UserType } from "../../modules/reducer/auth";
import GitHubCalendar from "react-github-calendar";

const Container = styled.div`
    ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
`;

const ProfileContainer = styled.div`
    margin-top: 2em;
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.darkWhite};
    padding: 0.8em;
    margin-bottom: 3em;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const ProfileImg = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-bottom: 0.8em;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const UserName = styled.div`
    padding-top: 0.4em;
    font-size: ${({ theme }) => theme.ms};
`;

const UserId = styled.div`
    padding: 0.4em 0;
    font-size: ${({ theme }) => theme.ls};
`;

const UserBio = styled.div`
    font-size: ${({ theme }) => theme.ms};
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
`;

const UserFollower = styled.div`
    display: flex;
    button {
        padding: 0.4em 0.8em;
        margin-left: auto;
        border: 1px solid ${({ theme }) => theme.darkWhite};

        &:hover {
            background-color: ${({ theme }) => theme.black};
            color: ${({ theme }) => theme.white};
        }
    }
`;

const FollowBox = styled.div`
    padding: 0.4em 0.8em;
    span {
        margin-left: 0.8em;
    }
`;

const UserDesc = styled.div`
    div {
        margin: 1em 0;
    }
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

interface Props {
    auth: UserType;
}

const HomeForm = ({ auth }: Props) => {
    return (
        <Container>
            {auth ? (
                <>
                    <ProfileContainer>
                        <ProfileBox>
                            <ProfileImg>
                                <img src={auth.avatarUrl} alt="프로필사진" />
                            </ProfileImg>
                            <UserName>{auth.name}</UserName>
                            <UserId>{auth.userId}</UserId>
                        </ProfileBox>

                        <UserInfo>
                            <UserFollower>
                                <FollowBox>
                                    Followers
                                    <span>{auth.followers}</span>
                                </FollowBox>
                                <FollowBox>
                                    Followings
                                    <span>{auth.followings}</span>
                                </FollowBox>
                                <FollowBox>
                                    PublicRepos
                                    <span>{auth.repos}</span>
                                </FollowBox>
                                <button type="button">Updated</button>
                            </UserFollower>

                            <UserDesc>
                                <div>
                                    {auth.company !== null
                                        ? `🏠 ${auth.company}`
                                        : ""}
                                </div>
                                <div>
                                    {auth.location !== null
                                        ? `🏠 ${auth.location}`
                                        : ""}
                                </div>
                                <div>
                                    <a href={auth.blog}>
                                        {auth.blog ? `🔗 ${auth.blog}` : ""}
                                    </a>
                                </div>
                                <div>
                                    <a href={auth.url}>{`💻 ${auth.url}`}</a>
                                </div>
                                <UserBio>{auth.bio}</UserBio>
                            </UserDesc>
                        </UserInfo>
                    </ProfileContainer>
                    {auth.userId && (
                        <GitHubCalendar
                            username={auth.userId}
                            blockSize={10}
                            blockMargin={4}
                            // years={[2021]}
                        >
                            <ReactTooltip delayShow={50} html />
                        </GitHubCalendar>
                    )}
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
        </Container>
    );
};

export default HomeForm;
