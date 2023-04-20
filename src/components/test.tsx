import { motion } from "framer-motion";
import { StyledApp, StyledTest } from './tests';
import { Browser, Minus, X } from 'phosphor-react';
import { MutableRefObject, ReactNode } from "react";
import { useComputer } from "../hooks/useComputer";
import { Icon } from './computer/desktop/archieves/icon/icon';

type TestType = {
  appRef: MutableRefObject<HTMLDivElement | null>
  children: ReactNode
  icon: string
  name: string
}

export const Test = (props: TestType) => {
  const computer = useComputer();
  return (
    <>
      <Icon
        icon={props.icon}
        name={props.name}
        onOpen={() => computer.handleTaskBar(props.icon)}
        onChangeBackground={computer.changeBackground}
        isBackgroundDifferent={computer.isChangeBackground}
      />

      {computer.isAppOpen && (
        <StyledTest layoutId="app">
          <StyledApp
            isFullScreen={computer.isFullScreen}
            drag
            dragConstraints={props.appRef}
            dragElastic={0.2}
            dragMomentum={false}
            className="app"
          >
            <motion.div className="menuBar">
              <div className="buttons">
                <button data-testid="minus" onClick={computer.minimizeApp} className="button">
                  <Minus size={20} />
                </button>

                <button data-testid="fullScreen" onClick={computer.handleFullScreen} className="button">
                  {<Browser size={20} weight="bold" />}
                </button>

                <button data-testid="close" onClick={() => computer.removeiconAndCloseApp(props.icon)} className="buttonClose">
                  <X size={20} />
                </button>
              </div>
            </motion.div>

            <div className="content">
              {props.children}
            </div>
          </StyledApp>
        </StyledTest >
      )}
    </>
  );
};