import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import EditButton from "./EditButton";
import { Title } from "../../styles/common";
import { useToggle, useHideBodyScroll } from "../../hook";
import ModalComponent from "./ModalComponent";
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
    const [selectName, setSelectName] = useState<string[]>(userSkills);
    useHideBodyScroll(showingModal);

    // * 이 로직은 , 모달창에서 스택을 누르면 추가시키는 로직
    const onSeleted = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
            const { value } = e.currentTarget.dataset;
            if (selectName?.includes(value as string)) {
                setSelectName(
                    selectName.filter((name) => name !== (value as string))
                );
                return;
            }
            setSelectName([...selectName, value as string]);
        },
        [selectName]
    );

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
                            selectName={selectName}
                            onSeleted={onSeleted as () => void}
                            modal
                            userSkills={userSkills}
                        />
                    </>
                </ModalComponent>
            )}
            {authId === cortfolioId && (
                <>
                    <EditButton onClick={handleShowingModal}>+ADD</EditButton>
                </>
            )}
            <SkillContainer>
                <SkillList userSkills={selectName} />
            </SkillContainer>
        </Container>
    );
};

export default Skills;
