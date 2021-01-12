import { useCallback } from "react";
import { useSelector } from "react-redux";
import HomeForm from "../components/home/HomeForm";
import { RootState } from "../modules/rootReducer";

export default function Home() {
    const { auth } = useSelector((state: RootState) => state.auth);

    const handleUpdate = useCallback(() => {}, []);

    return <HomeForm auth={auth} />;
}
