import { AppProps } from "next/dist/next-server/lib/router/router";
import { Global } from "@emotion/react";
import reset from "../styles/reset";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={reset} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
