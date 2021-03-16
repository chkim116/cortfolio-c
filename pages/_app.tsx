import { AppProps } from "next/dist/next-server/lib/router/router";
import { Global, ThemeProvider } from "@emotion/react";
import reset from "../styles/reset";
import React from "react";
import { theme } from "../styles/theme";
import Axios from "axios";
import { Provider } from "react-redux";
import store from "../modules/store";
import AuthCtx from "../components/common/Auth";

Axios.defaults.baseURL = "http://localhost:4000";
Axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={reset} />
            <Provider store={store}>
                <AuthCtx>
                    <Component {...pageProps} />
                </AuthCtx>
            </Provider>
        </ThemeProvider>
    );
}

export default MyApp;
