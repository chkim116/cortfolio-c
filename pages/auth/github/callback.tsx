import { useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

const Callback = () => {
    const router = useRouter();
    const code = router.query.code;

    useEffect(() => {
        if (!code) {
            return;
        }
        async function getToken() {
            try {
                // code를 보내 express에서 처리하게끔 요청
                await Axios.post(`/auth`, {
                    code,
                }).then((res) => res.data);
                router.push("/");
            } catch (error) {
                console.error(error);
                router.push("/");
            }
        }
        getToken();
    }, [code]);

    return <div>웰컴</div>;
};

export default Callback;
