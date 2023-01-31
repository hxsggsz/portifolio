import { App } from "./app/app";
import { Icon } from "./icon/icon";
import { useComputer } from "../../../../hooks/useComputer";

type IconTypes = {
  name: string;
  icon: string;
  about?: {
    text: string;
    image: string;
  }[];
};

export const Archieves = ({ name, icon, about }: IconTypes) => {
  const computer = useComputer();
  return (
    <>
      {/* icon on desktop */}
      <Icon
        icon={icon}
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
