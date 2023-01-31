import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/Global'
import { ThemeProvider } from 'styled-components'
import { PurpleTheme } from '../styles/themes/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={PurpleTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
