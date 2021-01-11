import { css } from "@emotion/react";

const reset = css`
    * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
            Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: auto;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 14px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    li,
    ul,
    ol {
        padding: 0;
        margin: 0;
    }

    ul,
    li,
    ol {
        list-style: none;
    }
`;

export default reset;
