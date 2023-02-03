import { useState } from "react";
import { useTaskBar } from "../context/taskBarContext";

// hook com todas as funções da pagina Computer
export const useComputer = () => {
  const { getIconToTaskBar, removeIconFromTaskBar } = useTaskBar();
  const [computer, setComputer] = useState({
    isAppOpen: false,
    isChangeBackground: false,
    isFullScreen: false,
    isShowConfig: false,
  });

  return {
    ...computer,
    minimizeApp() {
      setComputer({
        ...computer,
        isAppOpen: !computer.isAppOpen,
      });
    },
    handleTaskBar(image: string) {
      setComputer({
        ...computer,
        isAppOpen: !computer.isAppOpen,
      });
      getIconToTaskBar(image);
    },

    handleIsShowConfig(image: string) {
      setComputer({
        ...computer,
        isShowConfig: true,
      });

      getIconToTaskBar(image);
    },

    removeiconAndCloseConfig(image: string) {
      setComputer({
        ...computer,
        isShowConfig: false,
      });

      removeIconFromTaskBar(image);
    },

    removeiconAndCloseApp(image: string) {
      setComputer({
        ...computer,
        isAppOpen: false,
      });
      removeIconFromTaskBar(image);
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
