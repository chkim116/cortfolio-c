import React from "react";
import styled from "@emotion/styled";
import { Title } from "../../styles/common";
import EditButton from "./EditButton";
import { ContanctType } from "../../@types";

const Container = styled.div`
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
    authId: string | undefined;
    cortfolioId: string;
    contact: ContanctType;
}

const Contact = ({ authId, cortfolioId, contact }: Props) => {
    return (
        <Container id="contact">
            <Title>Contact Me</Title>
            <EditButton authId={authId} cortfolioId={cortfolioId}>
                +ADD
            </EditButton>

            <ContactInfo>
                <h2>INFO.</h2>
                <UserInfo>
                    <div>{contact?.name}</div>
                    <div>{contact?.phone}</div>
                    <div>{contact?.email}</div>
                </UserInfo>
                {contact.career?.map((careers) => (
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
        </Container>
    );
};

export default Contact;
