import styled from "@emotion/styled";
import { CortfolioType, UserType } from "../../@types";
import EditButton from "./EditButton";
import { ProfileImg } from "../home/HomeForm";
import { Fragment } from "react";

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

const Title = styled.h1`
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

const Profile = styled.div`
    background-color: #9dc6ec;
    color: ${({ theme }) => theme.white};
    display: flex;
    font-size: ${({ theme }) => theme.ls};
    align-items: center;
    flex-direction: column;
    padding: 4em 0;
    a {
        color: ${({ theme }) => theme.white};
        width: 150px;
        padding: 0.3em 0.5em;
        border: 1px solid ${({ theme }) => theme.white};
        text-align: center;
    }
`;

const ProfileImgTouch = styled(ProfileImg)`
    cursor: cursor;
    &:hover div {
        display: block;
    }

    div {
        display: none;
        position: absolute;
        top: 0;
        left: 50%;
        border-radius: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 60px;
        font-weight: bold;
        line-height: 250px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

const Skills = styled.div`
    max-width: 600px;
    margin: 4em auto;
    font-size: ${({ theme }) => theme.ms};
    span {
        margin-right: 4px;
    }
`;

const SkillList = styled.div`
    display: flex;
    margin-top: 1em;
    padding: 0.5em;
    min-height: 300px;
`;

const Project = styled.div`
    margin: 4em 0;
    padding: 1em 0;
`;

const CortfolioContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 350px);
    justify-content: center;
    margin: 1em auto;
    gap: 0.3em;
    padding-bottom: 3em;
`;

const CortfolioCard = styled.div`
    border: 1px solid ${({ theme }) => theme.darkWhite};
    height: 350px;
    position: relative;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;

const CortfolioHover = styled.div`
    display: none;
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.white};
    font-weight: 300;
    letter-spacing: 1.2px;
    font-size: ${({ theme }) => theme.ls};
    div {
        margin: 0.3em 0;
    }
`;

const LinkBtn = styled.span`
    width: 80px;
    border: 1px solid ${({ theme }) => theme.darkWhite};
    padding: 0.2em 0.4em;
    margin-right: 0.3em;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.black};
        a {
            color: ${({ theme }) => theme.white};
        }
    }
`;

const Contact = styled.div`
    margin: 4em 0;
    min-height: 550px;
    padding: 1em 0;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    align-items: center;
    margin: 2em auto;
`;

const UserInfo = styled.div`
    padding: 1em;
    text-align: center;
    font-size: ${({ theme }) => theme.ms};
`;

const UserCareer = styled.div`
    padding: 1em;
    font-size: ${({ theme }) => theme.ms};
`;

interface Props {
    auth: UserType | null;
    cortfolio: CortfolioType;
}

const CortfolioForm = ({ auth, cortfolio }: Props) => {
    return (
        <>
            <Header>
                <div>{cortfolio.userId}</div>
                <ul>
                    <li>Home</li>
                    <li>Skils</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </Header>

            <main>
                {/* 이미지 수정 가능하게 만들기 */}
                <Profile>
                    <ProfileImgTouch>
                        <img src={cortfolio.avatarUrl} alt="프로필이미지" />
                        <div>+</div>
                    </ProfileImgTouch>
                    <a href="#contact">Contact ME</a>
                </Profile>

                {/* 목록에서 검색하고, 불러오게 만들기 */}

                <Skills>
                    <Title>Skills</Title>
                    <EditButton
                        authId={auth?.userId}
                        cortfolioId={cortfolio.userId}
                    >
                        +ADD
                    </EditButton>
                    {cortfolio.skills.map((skill) => (
                        <SkillList key={skill.name}>
                            <span>{skill.icon}</span>
                            {skill.name}
                        </SkillList>
                    ))}
                </Skills>

                {/* 후버애니메이션 */}
                <Project>
                    <Title>Projects</Title>
                    <EditButton
                        authId={auth?.userId}
                        cortfolioId={cortfolio.userId}
                    >
                        +ADD
                    </EditButton>
                    <CortfolioContainer>
                        {cortfolio.project.map((project) => (
                            <Fragment key={project.gitLink}>
                                <CortfolioCard className="hover">
                                    <img
                                        src={project.thumb}
                                        alt={project.name}
                                    />
                                    <CortfolioHover>
                                        <div>{project.name}</div>
                                        <div>{project.description}</div>
                                    </CortfolioHover>
                                    <LinkBtn>
                                        <a href={project.gitLink}>Git</a>
                                    </LinkBtn>
                                    <LinkBtn>
                                        <a href={project.pageLink}>Page</a>
                                    </LinkBtn>
                                </CortfolioCard>
                            </Fragment>
                        ))}
                    </CortfolioContainer>
                </Project>

                {/* 커리어 등록시만 보여주게하기 */}
                <Contact id="contact">
                    <Title>Contact Me</Title>
                    <EditButton
                        authId={auth?.userId}
                        cortfolioId={cortfolio.userId}
                    >
                        +ADD
                    </EditButton>

                    <ContactInfo>
                        <h2>INFO.</h2>
                        <UserInfo>
                            <div>{cortfolio.contact?.name}</div>
                            <div>{cortfolio.contact?.phone}</div>
                            <div>{cortfolio.contact?.email}</div>
                        </UserInfo>
                        {cortfolio.contact.career?.map((careers) => (
                            <>
                                <h2>CAREER.</h2>
                                <UserCareer>
                                    <div>{careers.companyName}</div>
                                    <div>{careers.date}</div>
                                    <div>{careers.task}</div>
                                </UserCareer>
                            </>
                        ))}
                    </ContactInfo>
                </Contact>
            </main>
        </>
    );
};

export default CortfolioForm;
