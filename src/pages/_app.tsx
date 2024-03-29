import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/Global";
import { ThemesProvider } from "../context/themeContext";
import { TaskBarProvider } from "../context/taskBarContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemesProvider>
          <GlobalStyle />
        <TaskBarProvider>
          <Component {...pageProps} />
        </TaskBarProvider>
      </ThemesProvider>
    </>
  );
}
