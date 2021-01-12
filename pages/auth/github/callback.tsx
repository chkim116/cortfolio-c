import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../../modules/reducer/auth";
import { RootState } from "../../../modules/rootReducer";
import CallbackForm from "../../../components/callback/CallbackForm";

const Callback = () => {
    const router = useRouter();
    const code = router.query.code;
    const dispatch = useDispatch();
    const { isLogin } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (!code) {
            return;
        }
        dispatch(getAuth(code));
    }, [code]);

    useEffect(() => {
        if (isLogin) {
            router.push("/");
        }
    }, [isLogin]);

    return <CallbackForm></CallbackForm>;
};

export default Callback;
