import { motion } from "framer-motion";
import styled from "styled-components";

type AppTypes = {
  isFullScreen: boolean;
};

export const StyledMenubar = styled(motion.div)`
  height: 6vh;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: end;
`
export const StyledButtons = styled(motion.button)`    
  background: inherit;
  border: none;
  padding: 4px;
  
  &:hover {
    background: var(--white-pc);
  }
`

export const StyledCloseButton = styled.button`
  background: inherit;
  border: none;
  padding: 4px;

  &:hover {
    background: var(--red-pc);
  }
`

export const StyledApp = styled(motion.div) <AppTypes>`
  position: absolute;
  top: 0;
  left: ${({ isFullScreen }) => (isFullScreen ? "0" : "25%")};
  background: var(--black-pc);
  border: 5px solid ${({ theme }) => theme.primary};
  width: 100%;
  max-width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "55vw")};
  max-height: ${({ isFullScreen }) => (isFullScreen ? "92vh" : "82vh")};
  height: 100%;
  z-index: 99;
  overflow: hidden;
  transition: max-width 0.2s ease-in;
  transition: max-height 0.2s ease-in;
  
  @media (max-width: 740px) {
    max-width: 100vw;
    left: 0;
  }
`

export const StyledContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  z-index: 9;
  /* scrollbar */
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background: none;
    width: 0.5vw;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondary};
    border-radius: 2px;
  }
`