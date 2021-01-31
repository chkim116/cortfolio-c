import React from "react";
import styled from "@emotion/styled";
import EditButton from "./EditButton";
import { SkillsType } from "../../@types";
import { Title } from "../../styles/common";

const Container = styled.div`
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

interface Props {
    authId: string | undefined;
    cortfolioId: string;
    skills: SkillsType[];
}

const Skills = ({ authId, cortfolioId, skills }: Props) => {
    return (
        <Container>
            <Title>Skills</Title>
            <EditButton authId={authId} cortfolioId={cortfolioId}>
                +ADD
            </EditButton>
            {skills.map((skill) => (
                <SkillList key={skill.name}>
                    <span>{skill.icon}</span>
                    {skill.name}
                </SkillList>
            ))}
        </Container>
    );
};

export default Skills;