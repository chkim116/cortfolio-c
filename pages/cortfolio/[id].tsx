import { useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";
import { CortfolioType } from "../../@types";
import Footer from "../../components/layouts/Footer";
import CortfolioHeader from "../../components/cortfolio/Header";
import Profile from "../../components/cortfolio/Profile";
import React from "react";
import Skils from "../../components/cortfolio/Skills";
import Project from "../../components/cortfolio/Project";
import Connect from "../../components/cortfolio/Contact";
import Contact from "../../components/cortfolio/Contact";

const Index = () => {
    const { auth } = useSelector((state: RootState) => state.auth);

    const cortfolio: CortfolioType = {
        userId: "chkim116",
        avatarUrl:
            "https://media.vlpt.us/images/hyeong412/post/e0889d21-ac02-46c7-8e38-75ffcf77f8b4/gitbranch.png",
        skills: [{ name: "몽고db", icon: "M" }],
        project: [
            {
                name: "gonggus",
                thumb:
                    "https://media.vlpt.us/images/hyeong412/post/e0889d21-ac02-46c7-8e38-75ffcf77f8b4/gitbranch.png",
                description: "공동구매사이트",
                gitLink: "hhot",
                pageLink: "https",
            },
        ],
        contact: {
            career: [
                {
                    companyName: "어디컴퍼니",
                    date: "2020-10-22 ~ 2023-10-01",
                    task: "뭐러뭐뭐뤄 업무를 했습니다",
                },
            ],
            name: "김창회",
            phone: "010-2629-9315",
            email: "dudnqnfqlc2naver.com",
        },
    };

    return (
        <>
            <CortfolioHeader cortfolioId={cortfolio.userId} />
            <main>
                {/* 이미지 수정 가능하게 만들기 */}
                <Profile
                    authId={auth?.userId}
                    cortfolioId={cortfolio.userId}
                    avatarUrl={cortfolio.avatarUrl}
                />

                {/* 목록에서 검색하고, 불러오게 만들기 */}
                <Skils
                    authId={auth?.userId}
                    cortfolioId={cortfolio.userId}
                    skills={cortfolio.skills}
                />
                {/* 후버애니메이션 */}
                <Project
                    authId={auth?.userId}
                    cortfolioId={cortfolio.userId}
                    projects={cortfolio.project}
                />

                {/* 커리어 등록시만 보여주게하기 */}
                <Contact
                    authId={auth?.userId}
                    cortfolioId={cortfolio.userId}
                    contact={cortfolio.contact}
                />
            </main>
            <Footer></Footer>
        </>
    );
};

export default Index;
