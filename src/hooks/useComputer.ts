import { useState } from "react";

export const useComputer = () => {
  const [computer, setComputer] = useState({
    isAppOpen: false,
    isChangeBackground: false,
    isFullScreen: false,
    colors: "",
  });

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
    handleColors(color: string) {
      setComputer({ ...computer, colors: color });
      console.log(color);
    },
  };
};
