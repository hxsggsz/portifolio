import { Icon } from "../icon/icon";
import { StyledApp, StyledButtons, StyledCloseButton, StyledContent, StyledMenubar } from '.';
import { AnimatePresence } from "framer-motion";
import { MutableRefObject, ReactNode } from "react";
import { Browser, Browsers, Minus, X } from 'phosphor-react';
import { useComputer } from "../../../../../hooks/useComputer";

type ArchieveType = {
  appRef: MutableRefObject<HTMLDivElement | null>
  children: ReactNode
  icon: string
  name: string
}

export const Archieve = (props: ArchieveType) => {
  const computer = useComputer();
  return (
    <>
      <Icon
        icon={props.icon}
        name={props.name}
        onOpen={() => computer.handleTaskBar(props.icon)}
        onChangeBackground={computer.changeBackground}
        isBackgroundDifferent={computer.isChangeBackground}
        appRef={props.appRef}
      />
      <AnimatePresence>

        {computer.isAppOpen && (
          <StyledApp
            drag
            dragConstraints={props.appRef}
            dragElastic={0.2}
            dragMomentum={false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="app"
            isFullScreen={computer.isFullScreen}
          >
            <StyledMenubar>
              <StyledButtons data-testid="minus" onClick={computer.minimizeApp}>
                <Minus size={20} />
              </StyledButtons>

              <StyledButtons data-testid="fullScreen" onClick={computer.handleFullScreen}>
                {computer.isFullScreen ? <Browsers size={20} weight="bold" /> : <Browser size={20} weight="bold" />}
              </StyledButtons>

              <StyledCloseButton data-testid="close" onClick={() => computer.removeiconAndCloseApp(props.icon)}>
                <X size={20} />
              </StyledCloseButton>
            </StyledMenubar>

            <StyledContent>
              {props.children}
            </StyledContent>
          </StyledApp>
        )}

      </AnimatePresence >
    </>
  );
};