import styled from "styled-components";

type IconTypes = {
  isFullScreen: boolean;
};

export const StyledApp = styled.div<IconTypes>`
  .app {
    position: absolute;
    top: 0;
    left: ${({ isFullScreen }) => (isFullScreen ? "0" : "25%")};
    background: var(--black-pc);
    border: 5px solid ${({ theme }) => theme.primary};
    width: 100%;
    max-width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "55vw")};
    max-height: 92vh;
    overflow: hidden;
  }

  .menuBar {
    height: 6vh;
    width: 100%;
    background: ${({ theme }) => theme.primary};
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 4px;
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
    display: grid;
    place-items: center;
    grid-gap: 0 3rem;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-auto-columns: minmax(1rem, 1fr);
    overflow-y: auto;
    max-height: 92vh;

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

  .config-colors {
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
  }

  .title-colors {
    font-size: max(1rem, 3vw);
  }

  .colors {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem 1rem;
  }

  .purple,
  .blue,
  .red,
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

  .red {
    border: 3px solid var(--red-dark);
    background: var(--red-pc);
  }

  .grey {
    border: 3px solid var(--grey-dark);
    background: var(--grey-pc);
  }

  .yellow {
    border: 3px solid var(--yellow-dark);
    background: var(--yellow-pc);
  }
`;
