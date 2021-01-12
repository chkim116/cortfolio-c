import { AppProps } from "next/dist/next-server/lib/router/router";
import { Global, ThemeProvider } from "@emotion/react";
import reset from "../styles/reset";
import Header from "../components/layouts/Header";
import React from "react";
import Footer from "../components/layouts/Footer";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import Axios from "axios";
import { Provider } from "react-redux";
import store from "../modules/store";

const AppLayout = styled.main``;

Axios.defaults.baseURL = "http://localhost:4000";
Axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={reset} />
            <Provider store={store}>
                <Header />
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
                <Footer />
            </Provider>
        </ThemeProvider>
    );
}

export default MyApp;
