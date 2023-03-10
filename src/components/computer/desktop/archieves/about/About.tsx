import { App } from "../app/app";
import { Icon } from "../icon/icon";
import arquivo from "../../../../../../public/arquivo.png";
import { useComputer } from "../../../../../hooks/useComputer";

type IconTypes = {
  name: string;
  about: {
    id: string;
    text: string;
    image: string;
  }[];
};

export const About = ({ name, about }: IconTypes) => {
  const computer = useComputer();
  return (
    <>  
      <Icon
        icon={arquivo.src}
        name={name}
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() =>
          computer.handleTaskBar(arquivo.src)
        }
        onChangeBackground={computer.changeBackground}
      />
 
      <App
        isShow={computer.isAppOpen}
        isFullScreen={computer.isFullScreen}
        onMinus={computer.minimizeApp}
        onFullScreen={computer.handleFullScreen}
        onClose={() => computer.removeiconAndCloseApp(arquivo.src)}
        about={about}
      />
    </>
  );
};
