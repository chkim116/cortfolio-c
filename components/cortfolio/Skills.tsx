import React from "react";
import styled from "@emotion/styled";
import EditButton from "./EditButton";
import { Title } from "../../styles/common";
import { useToggle } from "../../hook";
import ModalComponent from "./ModalComponent";
import DeleteButton from "./DeleteButton";
import { SkillList } from "./SkillList";

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
`

interface Props {
    authId: string | undefined;
    cortfolioId: string;
    userSkills: string[];
}

const Skills = ({ authId, cortfolioId, userSkills }: Props) => {
    const [showingModal, handleShowingModal] = useToggle();

    return (
        <Container>
            <Title>Skills</Title>
            {showingModal && <ModalComponent onClick={handleShowingModal} />}
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
