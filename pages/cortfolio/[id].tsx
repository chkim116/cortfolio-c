import { useSelector } from "react-redux";
import CortfolioForm from "../../components/cortfolio/CortfolioForm";
import { RootState } from "../../modules/rootReducer";
import useSWR from "swr";
import { CortfolioType } from "../../@types";
import Footer from "../../components/layouts/Footer";

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
            <CortfolioForm auth={auth} cortfolio={cortfolio}></CortfolioForm>{" "}
            <Footer></Footer>
        </>
    );
};

export default Index;
