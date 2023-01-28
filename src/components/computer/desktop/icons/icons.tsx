import Image from "next/image";
import { StyledIcons } from ".";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import icon from "../../../../../public/flower2.png";
import { CornersOut, Minus, Square, X } from "phosphor-react";
import useSizeScreen from "../../../../hooks/useSizeScreen";

const useComputer = () => {
  const [computer, setComputer] = useState({
    isAppOpen: false,
    isChangeBackground: false,
    isFullScreen: false,
  });

  return {
    ...computer,
    handleApp() {
      setComputer({
        ...computer,
        isAppOpen: !computer.isAppOpen,
      });
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

export const Icons = () => {
  const computer = useComputer();
  const { width } = useSizeScreen()
  return (
    <StyledIcons
      isFullScreen={computer.isFullScreen}
      isShow={computer.isChangeBackground}
    >
      {/* icon on desktop */}
      <div
        className="icon"
        onDoubleClick={computer.handleApp}
        onClick={computer.changeBackground}
      >
        <Image width={100} height={100} src={icon} alt="icon" />
        <p>nome do icone</p>
      </div>

      {/* the app */}
      {computer.isAppOpen && (
        <motion.div drag dragConstraints={{ left: -width, right: width }} className="app">
          <motion.div className="menuBar">
            <div className="buttons">
              {/* mudar isso aqui mais pra frente */}
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

          {/* conteúdo do app */}
          <div>
            <Image width={300} height={200} src={icon} alt={`icone`} />
            <h1>teste</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui voluptas reiciendis. Laudantium rerum deserunt quae perspiciatis doloremque error. Rerum eum voluptates totam id est modi iusto enim sequi. Nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui voluptas reiciendis. Laudantium rerum deserunt quae perspiciatis doloremque error. Rerum eum voluptates totam id est modi iusto enim sequi. Nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui voluptas reiciendis. Laudantium rerum deserunt quae perspiciatis doloremque error. Rerum eum voluptates totam id est modi iusto enim sequi. Nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui voluptas reiciendis. Laudantium rerum deserunt quae perspiciatis doloremque error. Rerum eum voluptates totam id est modi iusto enim sequi. Nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui voluptas reiciendis. Laudantium rerum deserunt quae perspiciatis doloremque error. Rerum eum voluptates totam id est modi iusto enim sequi. Nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui voluptas reiciendis. Laudantium rerum deserunt quae perspiciatis doloremque error. Rerum eum voluptates totam id est modi iusto enim sequi. Nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui voluptas reiciendis. Laudantium rerum deserunt quae perspiciatis doloremque error. Rerum eum voluptates totam id est modi iusto enim sequi. Nemo.</p>
          </div>
        </motion.div>
      )}
    </StyledIcons>
  );
};
