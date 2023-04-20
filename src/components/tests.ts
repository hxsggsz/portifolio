import { motion } from "framer-motion";
import styled from "styled-components";

type AppTypes = {
  isFullScreen: boolean;
};

export const StyledTest = styled(motion.div)`
  .menuBar {
    height: 6vh;
    width: 100%;
    background: ${({ theme }) => theme.primary};
  }
  
  .buttons {
    display: flex;
    align-items: center;
    justify-content: end;
    border: 1px solid ${({ theme }) => theme.primary};
  }

  .button,
  .buttonClose {
    background: inherit;
    border: none;
    padding: 4px;
  }

  .button:hover {
    background: var(--white-pc);
    border: 1px solid var(--black-pc);
  }

  .buttonClose:hover {
    background: var(--red-pc);
    border: 1px solid var(--black-pc);
  }

  .content {
    position: relative;
    height: 100%;
    overflow-y: auto;
    z-index: 2;
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
  }

  .config-colors,
  .projects {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem 0;
    
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
  }

  .title-colors {
    font-size: max(1rem, 3vw);
  }

  .chooseLanguages {
    margin-top: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .buttons {
    display: flex;
  }

  .colors {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .purple,
  .blue,
  .green,
  .red,
  .pink,
  .grey,
  .yellow {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 50%;

    @media (max-width: 725px) {
      width: 2rem;
      height: 2rem;
    }
  }

  .purple {
    border: 3px solid var(--purple-dark);
    background: var(--purple-pc);
  }

  .blue {
    border: 3px solid var(--blue-dark);
    background: var(--blue-pc);
  }

  .green {
    border: 3px solid var(--green-dark);
    background: var(--green-pc);
  }

  .red {
    border: 3px solid var(--red-dark);
    background: var(--red-pc);
  }

  .pink {
    border: 3px solid var(--pink-dark);
    background: var(--pink-pc);
  }

  .grey {
    border: 3px solid var(--grey-dark);
    background: var(--grey-pc);
  }

  .yellow {
    border: 3px solid var(--yellow-dark);
    background: var(--yellow-pc);
  }

  .languages {
    display: flex;
    gap: 4rem 1rem;
  }

  .options, .options:disabled {
    cursor: pointer;
    margin: 3rem 0;
    padding: 12px;
    border: 3px solid ${({ theme }) => theme.primary};
    background: var(--black-pc);
    color: var(--white-pc);
  }
  
  .options:disabled {
    cursor: not-allowed;
  }
`

export const StyledApp = styled(motion.div)<AppTypes>`
  position: absolute;
  top: 0;
  left: ${({ isFullScreen }) => (isFullScreen ? "0" : "25%")};
  background: var(--black-pc);
  border: 5px solid ${({ theme }) => theme.primary};
  width: 100%;
  max-width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "55vw")};
  max-height: ${({ isFullScreen }) => (isFullScreen ? "100vh" : "82vh")};
  height: 100%;
  z-index: 2;
  overflow: hidden;
  
  @media (max-width: 740px) {
    max-width: 100vw;
    left: 0;
  }
`