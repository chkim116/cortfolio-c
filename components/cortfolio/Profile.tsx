import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
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
        margin-top: 1em;
        border: 1px solid ${({ theme }) => theme.white};
        text-align: center;

        &:hover {
            background-color: ${({ theme }) => theme.darkWhite};
        }
    }
`;

const ProfileImgTouch = styled.div`
    width: 350px;
    height: 350px;
    position: relative;
    img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    &:hover div {
        display: block;
    }

    div {
        cursor: pointer;
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
        line-height: 350px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

const Profile = ({ avatarUrl }: { avatarUrl: string }) => {
    return (
        <Container>
            <ProfileImgTouch>
                <img src={avatarUrl} alt="프로필이미지" />
                <div>+</div>
            </ProfileImgTouch>
            <a href="#contact">Contact ME</a>
        </Container>
    );
};

export default Profile;
