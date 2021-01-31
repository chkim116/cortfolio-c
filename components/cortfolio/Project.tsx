import React from "react";
import { ProjectType } from "../../@types";
import { Title } from "../../styles/common";
import EditButton from "./EditButton";
import styled from "@emotion/styled";
import { Fragment } from "react";
import { useToggle } from "../../hook";

const Container = styled.div`
    margin: 4em 0;
    padding: 1em 0;
`;

const Cortfolio = styled.div`
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

interface Props {
    authId: string | undefined;
    cortfolioId: string;
    projects: ProjectType[];
}

const Project = ({ authId, cortfolioId, projects }: Props) => {
    const [showingModal, handleShowingModal] = useToggle();

    return (
        <Container>
            <Title>Projects</Title>
            {showingModal && <div>모달창 on</div>}
            <EditButton
                authId={authId}
                cortfolioId={cortfolioId}
                onClick={handleShowingModal}
            >
                +ADD
            </EditButton>
            <Cortfolio>
                {projects.map((project) => (
                    <Fragment key={project.gitLink}>
                        <CortfolioCard>
                            <img src={project.thumb} alt={project.name} />
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
            </Cortfolio>
        </Container>
    );
};

export default Project;
