import { useState } from "react";

// hook com todas as funções da pagina Computer
export const useComputer = () => {
  const [computer, setComputer] = useState({
    isAppOpen: false,
    isChangeBackground: false,
    isFullScreen: false,
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
  };
};
