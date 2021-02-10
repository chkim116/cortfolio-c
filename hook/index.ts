import { useCallback, useState, useEffect } from "react";

export const useToggle = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const onClick = useCallback((): void => {
        setToggle((prev) => !prev);
    }, []);

    return [toggle, onClick, setToggle];
};

export const useHideBodyScroll = (toggle: boolean) => {
    useEffect(() => {
        if (process.browser && toggle) {
            const body = document.querySelector("body");
            (body as HTMLBodyElement).style.overflow = "hidden";
        } else {
            const body = document.querySelector("body");
            (body as HTMLBodyElement).style.overflow = "scroll";
        }
    }, [toggle]);
};
