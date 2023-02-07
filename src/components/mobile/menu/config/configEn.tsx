import { App } from "../app/app";
import { Icon } from "../icons/icons";
import config from "../../../../../public/gear.png";
import { useMobile } from "../../../../hooks/useMobile";
import { useThemes } from "../../../../context/themeContext";

type ConfigTypes = {
  name: string
}

export const ConfigEn = ({ name }: ConfigTypes) => {
  const { handleTheme } = useThemes();
  const mobile = useMobile()

  const configs = {
    title: "Select your favorite color!",
    titleLang: "Select your language!",
    handleTheme,
    isDisabledEng: true,
    isDisabledPt: false,
    hrefEng: "/mobile",
  };
  return (
    <>
      <Icon setIsAppOpen={mobile.handleApp} image={config.src} name={name} />
      <App isConfig={true} config={configs} isAppOpen={mobile.isAppOpen} onAppOpen={mobile.handleApp} />
    </>
  )
}