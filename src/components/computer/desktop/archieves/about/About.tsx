import { App } from "../app/app";
import { Icon } from "../icon/icon";
import arquivo from "../../../../../../public/arquivo.png";
import { useComputer } from "../../../../../hooks/useComputer";

type IconTypes = {
  name: string
  about: {
    text: string;
    image: string; 
  }[];
};

export const About = ({ name, about }: IconTypes) => {
  const computer = useComputer();
  return (
    <>
      {/* icon on desktop */}
      <Icon
        icon={arquivo.src}
        name={name}
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={computer.handleApp}
        onChangeBackground={computer.changeBackground}
      />

      {/* the app */}
      <App
        isShow={computer.isAppOpen}
        isFullScreen={computer.isFullScreen}
        onMinus={computer.handleApp}
        onFullScreen={computer.handleFullScreen}
        onClose={computer.handleApp}
        about={about}
      />
    </>
  );
};
