import { ReactNode, useState, createContext, useContext, useCallback } from "react"
import { BlueTheme, GreyTheme, PurpleTheme, RedTheme, YellowTheme } from "../styles/themes/themes"
import { ThemeProvider } from "styled-components"

interface SearchTypes {
  children: ReactNode
}

export interface StateProps {
  handleTheme: (color: string) => void
  setCurrentTheme: (color: string) => void
}


export const ThemeContext = createContext({} as StateProps)



export const useThemes = () => useContext(ThemeContext);
// fazer isso aqui funcionar amanha pra ter localhost
const getActive = () => {
  if (typeof window !== "undefined") {

    let currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      return JSON.parse(currentTheme) as any;
    }
    return {};
  }
};
console.log(getActive())

export const ThemesProvider = ({ children }: SearchTypes) => {
  const [colors, setColors] = useState(getActive()!)
  const [theme, setTheme] = useState(PurpleTheme)

  const handleTheme = (color: string) => {
    if (typeof window !== "undefined") {
      setColors(color);
      console.log(color)
    }
  }

  // const setCurrentTheme = () => {
  //   if (colors !== "undefined") {
  //     switch (colors!) {
  //       case "purple":
  //         setTheme(PurpleTheme);
  //         break;

  //       case "blue":
  //         setTheme(BlueTheme);
  //         break;

  //       case "red":
  //         setTheme(RedTheme);
  //         break;

  //       case "grey":
  //         setTheme(GreyTheme);
  //         break;

  //       case "yellow":
  //         setTheme(YellowTheme);
  //         break;

  //       default:
  //         return PurpleTheme;
  //     }
  //     return theme;
  //   }
  // }

  const setCurrentTheme = useCallback((color: string) => {
    if (color === "purple") {
      localStorage.setItem("theme", JSON.stringify(PurpleTheme));
      setTheme(PurpleTheme);
    }
    if (color === "blue") {
      localStorage.setItem("theme", JSON.stringify(BlueTheme));
      setTheme(BlueTheme);
    }
    if (color === "red") {
      localStorage.setItem("theme", JSON.stringify(RedTheme));
      setTheme(RedTheme);
    }
    if (color === "grey") {
      localStorage.setItem("theme", JSON.stringify(GreyTheme));
      setTheme(GreyTheme);
    }
    if (color === "yellow") {
      localStorage.setItem("theme", JSON.stringify(YellowTheme));
      setTheme(YellowTheme);
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ handleTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}