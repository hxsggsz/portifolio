import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/Global";
import { ThemeProvider } from "styled-components";
import { RedTheme } from "../styles/themes/themes";
import { useComputer } from "../hooks/useComputer";
import { ThemesProvider, useThemes } from "../context/themeContext";

export default function App({ Component, pageProps }: AppProps) {
  const { setCurrentTheme } = useThemes()
  return (
    <>
      <ThemesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemesProvider>
    </>
  );
}
