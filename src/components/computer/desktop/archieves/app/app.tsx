import { StyledApp } from ".";
import { motion } from "framer-motion";
import { Cards } from "../cards/cards";
import { Minus, CornersOut, Square, X } from "phosphor-react";
import useSizeScreen from "../../../../../hooks/useSizeScreen";
import { useComputer } from "../../../../../hooks/useComputer";

type AppTypes = {
  isShow: boolean;
  isFullScreen: boolean;
  onMinus: () => void;
  onFullScreen: () => void;
  onClose: () => void;
  about?: {
    text: string;
    image: string;
  }[];
};

export const App = ({
  isShow,
  isFullScreen,
  onMinus,
  onFullScreen,
  onClose,
  about,
}: AppTypes) => {
  const { width } = useSizeScreen();
  const computer = useComputer()
  return (
    <StyledApp isFullScreen={isFullScreen}>
      {isShow && (
        <motion.div
          drag
          dragConstraints={{
            left: -width,
            right: width,
            top: 0,
            bottom: 0,
          }}
          className="app"
        >
          <motion.div className="menuBar">
            <div className="buttons">
              <button onClick={onMinus} className="button">
                <Minus size={20} />
              </button>

              <button onClick={onFullScreen} className="button">
                {isFullScreen ? <CornersOut size={20} /> : <Square size={20} />}
              </button>

              <button onClick={onClose} className="buttonClose">
                <X size={20} />
              </button>
            </div>
          </motion.div>

          {/* conteúdo do app */}
          <div className="content">
            {/* {about?.map((abt) => (
              <>
                <Cards image={abt.image} text={abt.text} />
              </>
            ))} */}

            {/* <ConfigColors /> */}
            <div className="config-colors">
              <h1 className="title-colors">Escolha a sua cor favorita!</h1>
              <div className="colors">
                <div onClick={() => { computer.handleColors("purple") }} className="purple" />
                <div onClick={() => { computer.handleColors("blue") }} className="blue" />
                <div onClick={() => { computer.handleColors("red") }} className="red" />
                <div onClick={() => { computer.handleColors("grey") }} className="grey" />
                <div onClick={() => { computer.handleColors("yellow") }} className="yellow" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </StyledApp>
  );
};
