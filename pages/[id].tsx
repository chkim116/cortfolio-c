import MainComponent from "../components/home/MainComponent";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import useSWR from "swr";
import Axios from "axios";
import { useRouter } from "next/router";

const getCortfolioFetch = (url: string) => {
    return Axios.get(url).then((res) => res.data);
};

const index = () => {
    const router = useRouter();
    const { data, error } = useSWR(`${router.asPath}`, getCortfolioFetch);

    return (
        <>
            <Header />
            {data ? (
                <MainComponent
                    auth={data}
                    routerId={router.query.id as string}
                />
            ) : (
                <div>유저 정보를 찾을 수 없네요.</div>
            )}
            <Footer />
        </>
    );
};

export default index;
