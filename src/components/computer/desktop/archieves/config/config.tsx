import { StyledConfig } from ".";
import { useThemes } from "../../../../../context/themeContext";
import { App } from "../app/app";
import { useState } from "react";
import { Icon } from "../icon/icon";
import { useComputer } from "../../../../../hooks/useComputer";
import configs from "../../../../../../public/gear.png"

const getShowConfigByLocalStorage = () => {
  if (typeof window !== "undefined") {
    const config = localStorage.getItem("config")
    if (config) {
      return JSON.parse(config)
    }
    return true
  }
}

export const ConfigColors = () => {
  const computer = useComputer();
  const { handleTheme } = useThemes();
  const [isShow, setIsShow] = useState(getShowConfigByLocalStorage());

  const handleShowConfig = () => {
    setIsShow(!isShow);
    if (typeof window !== "undefined") {
      localStorage.setItem("config", JSON.stringify(!isShow))
    }
  }

  const config = {
    title: "Escolha a sua cor favorita!",
    titleLang: "Escolha a sua linguage!",
    handleTheme,
    onHidePt: handleShowConfig,
    hrefEng: "making",
  };
  return (
    <StyledConfig>
      <Icon
        icon={configs.src}
        name="configs"
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() => { setIsShow(true) }}
        onChangeBackground={computer.changeBackground}
      />

      <App
        config={config}
        isConfig={isShow}
        isShow={isShow}
        isFullScreen={computer.isFullScreen}
        onMinus={handleShowConfig}
        onFullScreen={computer.handleFullScreen}
        onClose={handleShowConfig}
      />
    </StyledConfig>
  );
};
