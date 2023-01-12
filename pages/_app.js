import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import { COLORS } from "../theme/colors";
const theme = {
    colors: COLORS
};

import "@fortawesome/fontawesome-free/css/all.css";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
