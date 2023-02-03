import { App } from "../app/app";
import { Icon } from "../icon/icon";
import pastas from "../../../../../../public/pastas.png";
import { useComputer } from "../../../../../hooks/useComputer";

type LangTypes = {
  name: string;
  lang: {
    id: string;
    name: string;
    images: string;
  }[];
};

export const Languages = ({ name, lang }: LangTypes) => {
  const computer = useComputer();
  return (
    <>
      <Icon
        icon={pastas.src}
        name={name}
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() => computer.handleTaskBar(pastas.src)}
        onChangeBackground={computer.changeBackground}
      />

      <App
        lang={lang}
        isShow={computer.isAppOpen}
        isFullScreen={computer.isFullScreen}
        onMinus={computer.minimizeApp}
        onFullScreen={computer.handleFullScreen}
        onClose={() => computer.removeiconAndCloseApp(pastas.src)}
      />
    </>
  );
};
