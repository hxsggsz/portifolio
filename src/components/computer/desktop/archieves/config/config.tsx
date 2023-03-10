import { StyledConfig } from ".";
import { useThemes } from "../../../../../context/themeContext";
import { App } from "../app/app";
import { Icon } from "../icon/icon";
import { useComputer } from "../../../../../hooks/useComputer";
import configs from "../../../../../../public/gear.png"

export const Configs = () => {
  const computer = useComputer();
  const { handleTheme } = useThemes();

  const config = {
    title: "Escolha a sua cor favorita!",
    titleLang: "Escolha a sua linguagem!",
    handleTheme,
    isDisabledEng: false,
    isDisabledPt: true,
    hrefEng: "/en/desktop",
  };
  return (
    <StyledConfig>
      <Icon
        icon={configs.src}
        name="configurações"
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() => computer.handleIsShowConfig(configs.src)}
        onChangeBackground={computer.changeBackground}
      />

      <App
        config={config}
        isConfig={computer.isShowConfig}
        isShow={computer.isShowConfig}
        isFullScreen={computer.isFullScreen}
        onMinus={computer.minimizeApp}
        onFullScreen={computer.handleFullScreen}
        onClose={() => computer.removeiconAndCloseConfig(configs.src)}
      />
    </StyledConfig>
  );
};
