import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../modules/reducer/auth";

interface Props {
    children: React.ReactChild;
}

const AuthCtx = ({ children }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    return <>{children}</>;
};

export default AuthCtx;
