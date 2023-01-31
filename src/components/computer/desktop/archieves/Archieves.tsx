import Image from "next/image";
import { StyledIcons } from ".";
import { App } from "./app/app";
import { useComputer } from "../../../../hooks/useComputer";
import { Icon } from "./icon/icon";

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
    <StyledIcons isShow={computer.isChangeBackground}>
      {/* icon on desktop */}
      <Icon icon={icon} name={name} isOpen={computer.isAppOpen} onOpen={computer.handleApp} onChangeBackground={computer.changeBackground} />
      {/* <div
        className="icon"
        onDoubleClick={computer.handleApp}
        onClick={computer.changeBackground}
      >
        <Image width={70} height={70} src={icon} alt="icon" />
        <p>{name}</p>
      </div> */}

      <App
        isShow={computer.isAppOpen}
        isFullScreen={computer.isFullScreen}
        onMinus={computer.handleApp}
        onFullScreen={computer.handleFullScreen}
        onClose={computer.handleApp}
        about={about}
      />
      {/* the app
      
      {computer.isAppOpen && (
        <motion.div drag dragConstraints={{
          left: -width, right: width,
          top: 0, bottom: 0
        }} className="app">
          <motion.div className="menuBar">
            <div className="buttons">
              mudar isso aqui mais pra frente
              <button onClick={computer.handleApp} className="button">
                <Minus size={20} />
              </button>

              <button onClick={computer.handleFullScreen} className="button">
                {computer.isFullScreen ? (
                  <CornersOut size={20} />
                ) : (
                  <Square size={20} />
                )}
              </button>

              <button onClick={computer.handleApp} className="buttonClose">
                <X size={20} />
              </button>
            </div>
          </motion.div>

          conteúdo do app
          <div className="content">
            {about?.map(abt => (
              <>
                <Cards image={abt.image} text={abt.text} />
              </>
            ))}


            <ConfigColors />
          </div>
        </motion.div>
      )} */}
    </StyledIcons>
  );
};
