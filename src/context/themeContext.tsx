import { ThemeProvider } from "styled-components";
import { ReactNode, useState, createContext, useContext, useCallback } from "react";
import { BlueTheme, GreyTheme, PurpleTheme, RedTheme, YellowTheme } from "../styles/themes/themes";

interface ThemeTypes {
  children: ReactNode
}

interface StateProps {
  handleTheme: (color: string) => void
  setCurrentTheme: () => {
    primary: string
    secondary: string
    background: string
  }
}

export const ThemeContext = createContext({} as StateProps)


export const useThemes = () => useContext(ThemeContext);
// pega o nome do tema pelo localStorage
const getThemeByLocalStorage = () => {
  if (typeof window !== "undefined") {

    let currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      return JSON.parse(currentTheme);
    }
    return "";
  }
};

export const ThemesProvider = ({ children }: ThemeTypes) => {
  const [colors, setColors] = useState(getThemeByLocalStorage())
  const [theme, setTheme] = useState(PurpleTheme)

  // muda o useState de colors com base no que o usuário escolher nas Configs
  const handleTheme = (color: string) => {
    if (typeof window !== "undefined") {
      setColors(color);
      localStorage.setItem("theme", JSON.stringify(color));
    }
  }

  /**
   * retorna o tema com base no useState colors
   * useCallback pra essa função só ser executada quando o usuario mudar o tema 
   */
  const setCurrentTheme = useCallback(() => {
    switch (colors) {
      case "purple":
        setTheme(PurpleTheme);
        break;
      case "blue":
        setTheme(BlueTheme);
        break;
      case "red":
        setTheme(RedTheme);
        break;
      case "grey":
        setTheme(GreyTheme);
        break;
      case "yellow":
        setTheme(YellowTheme);
        break;

      default:
        setTheme(PurpleTheme);
        break;
    }
    return theme;
  }, [colors, theme])

  return (
    <ThemeContext.Provider value={{ handleTheme, setCurrentTheme }}>
      <ThemeProvider theme={setCurrentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}