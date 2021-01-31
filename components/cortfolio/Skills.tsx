import React from "react";
import styled from "@emotion/styled";
import EditButton from "./EditButton";
import { Title } from "../../styles/common";
import { useToggle, useHideBodyScroll } from "../../hook";
import ModalComponent from "./ModalComponent";
import DeleteButton from "./DeleteButton";
import { SkillList, skills } from "./SkillList";

const Container = styled.div`
    max-width: 600px;
    margin: 4em auto;
    font-size: ${({ theme }) => theme.ms};
    span {
        margin-right: 4px;
    }
`;

const SkillContainer = styled.div`
    min-height: 300px;
`;

const SkillModalTitle = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    line-height: 35px;
    text-align: center;
    height: 35px;
    background-color: ${({ theme }) => theme.white};
`;

interface Props {
    authId: string | undefined;
    cortfolioId: string;
    userSkills: string[];
}

const Skills = ({ authId, cortfolioId, userSkills }: Props) => {
    const [showingModal, handleShowingModal] = useToggle();

    useHideBodyScroll(showingModal as boolean); 

    return ( 
        <Container>
            <Title>Skills</Title>
            {showingModal && (
                <ModalComponent onClick={handleShowingModal as () => void}>
                    <>
                        <SkillModalTitle>
                            자신의 스택을 선택해주세요
                        </SkillModalTitle>
                        <SkillList
                            modal
                            userSkills={skills().map((skill) => skill.name)}
                        />
                    </>
                </ModalComponent>
            )}
            {authId === cortfolioId && (
                <>
                    <EditButton onClick={handleShowingModal}>+ADD</EditButton>
                    <DeleteButton deleteOn />
                </>
            )}
            <SkillContainer>
                <SkillList userSkills={userSkills} />
            </SkillContainer>
        </Container>
    );
};

export default Skills;
