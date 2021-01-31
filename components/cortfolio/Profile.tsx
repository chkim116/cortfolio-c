import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Axios from "axios";

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

const ProfileImgHover = styled.div<{ changeImgHover: boolean }>`
    width: 350px;
    height: 350px;
    position: relative;
    img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    ${({ changeImgHover }) =>
        changeImgHover &&
        css`
            &:hover div {
                display: block;
            }
        `}

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

interface Props {
    authId: string | undefined;
    cortfolioId: string;
    avatarUrl: string;
}

const imgFetch = (url: string, fd: FormData) => {
    return Axios.post(url, fd).then((res) => res.data);
};

const Profile = ({ authId, cortfolioId, avatarUrl }: Props) => {
    const [userAvatarImg, setUserAvatarImg] = useState(avatarUrl);

    const handleChangeImg = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async (e: Event) => {
            const { files } = e.currentTarget as HTMLInputElement;
            const fd = new FormData();
            if (files) {
                fd.append("image", files[0]);
                const changeImg = await imgFetch("/cort/changeimg", fd);
                setUserAvatarImg(changeImg);
            }
        };
    }, []);

    return (
        <Container>
            <ProfileImgHover changeImgHover={authId === cortfolioId}>
                <img src={userAvatarImg} alt="프로필이미지" />
                <div onClick={handleChangeImg}>+</div>
            </ProfileImgHover>
            <a href="#contact">Contact ME</a>
        </Container>
    );
};

export default Profile;
