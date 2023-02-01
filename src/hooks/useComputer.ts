import { useState } from "react";
import { useRouter } from "next/router";
import * as theme from "../styles/themes/themes";

const getThemeByLocalStorage = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return JSON.parse(theme);
    }
    return "";
  }
};

export const useComputer = () => {
  const [computer, setComputer] = useState({
    isAppOpen: false,
    isChangeBackground: false,
    isFullScreen: false,
    colors: getThemeByLocalStorage(),
  });
  const router = useRouter();
  return {
    ...computer,
    handleApp() {
      setComputer({
        ...computer,
        isAppOpen: !computer.isAppOpen,
      });
    },

    changeBackground() {
      setComputer({
        ...computer,
        isChangeBackground: !computer.isChangeBackground,
      });
    },

    handleFullScreen() {
      setComputer({
        ...computer,
        isFullScreen: !computer.isFullScreen,
      });
    },

    handleTheme(color: string) {
      setComputer({
        ...computer,
        colors: color,
      });
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", JSON.stringify(color));
      }
    },

    setTheme() {
      switch (computer.colors) {
        case "purple":
          return theme.PurpleTheme;

        case "blue":
          return theme.BlueTheme;

        case "red":
          return theme.RedTheme;

        case "grey":
          return theme.GreyTheme;

        case "yellow":
          return theme.YellowTheme;

        default:
          return theme.PurpleTheme;
      }
    },
  };
};
