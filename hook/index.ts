import { useCallback, useState } from "react";

export const useToggle = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const onClick = useCallback((): void => {
        setToggle((prev) => !prev);
    }, []);

    return [toggle, onClick, setToggle];
};
