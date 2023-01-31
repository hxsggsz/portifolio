import { StyledApp } from ".";
import { motion } from "framer-motion";
import { ConfigColors } from "../config/config";
import { Minus, CornersOut, Square, X } from "phosphor-react";
import useSizeScreen from "../../../../../hooks/useSizeScreen";
import { Cards } from "../cards/cards";

type AppTypes = {
  isShow: boolean,
  isFullScreen: boolean,
  onMinus: () => void,
  onFullScreen: () => void,
  onClose: () => void,
  about?: {
    text: string;
    image: string;
  }[]
}

export const App = ({ isShow, isFullScreen, onMinus, onFullScreen, onClose, about }: AppTypes) => {
  const { width } = useSizeScreen()
  return (
    <StyledApp isFullScreen={isFullScreen} >
      {isShow && (
        <motion.div drag dragConstraints={{
          left: -width, right: width,
          top: 0, bottom: 0
        }} className="app">
          <motion.div className="menuBar">
            <div className="buttons">
              {/* mudar isso aqui mais pra frente */}
              <button onClick={onMinus} className="button">
                <Minus size={20} />
              </button>

              <button onClick={onFullScreen} className="button">
                {isFullScreen ? (
                  <CornersOut size={20} />
                ) : (
                  <Square size={20} />
                )}
              </button>

              <button onClick={onClose} className="buttonClose">
                <X size={20} />
              </button>
            </div>
          </motion.div>

          {/* conteúdo do app */}
          <div className="content">
            {about?.map(abt => (
              <>
                <Cards image={abt.image} text={abt.text} />
              </>
            ))}


            {/* <ConfigColors /> */}
          </div>
        </motion.div>
      )}
    </StyledApp>
  )
}