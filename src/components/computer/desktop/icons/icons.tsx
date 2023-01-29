import Image from "next/image";
import { StyledIcons } from ".";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CornersOut, Minus, Square, X } from "phosphor-react";
import useSizeScreen from "../../../../hooks/useSizeScreen";
import { Cards } from "./cards/cards";
import { useComputer } from "../../../../hooks/useComputer";

type IconTypes = {
  name: string;
  icon: string;
  about?: {
    text: string;
    image: string;
  }[]
}

export const Icons = ({ name, icon, about }: IconTypes) => {
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
        <Image width={70} height={70} src={icon} alt="icon" />
        <p>{name}</p>
      </div>

      {/* the app */}
      {computer.isAppOpen && (
        <motion.div drag dragConstraints={{
          left: -width, right: width,
          top: 0, bottom: 0
        }} className="app">
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
          <div className="content">
            {about?.map(abt => (
              <>
                <Cards image={abt.image} text={abt.text} />
              </>
            ))}
          </div>
        </motion.div>
      )}
    </StyledIcons>
  );
};
