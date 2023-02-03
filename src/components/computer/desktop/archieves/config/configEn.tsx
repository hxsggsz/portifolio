import { App } from "../app/app";
import { StyledConfig } from ".";
import { Icon } from "../icon/icon";
import configs from "../../../../../../public/gear.png"
import { useThemes } from "../../../../../context/themeContext";
import { useComputer } from "../../../../../hooks/useComputer";

export const ConfigsEn = () => {
  const computer = useComputer();
  const { handleTheme } = useThemes();

  const config = {
    title: "Select your favorite color!",
    titleLang: "Select your language",
    handleTheme,
    isDisabledEng: true,
    isDisabledPt: false,
    hrefPt: "/desktop",
  };
  return (
    <StyledConfig>
      <Icon
        icon={configs.src}
        name="configurations"
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
