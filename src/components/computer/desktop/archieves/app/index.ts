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
    border: 5px solid var(--purple-pc);
    width: 100%;
    max-width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "55vw")};
    max-height: 92vh;
    overflow: hidden;
  }

  .menuBar {
    height: 6vh;
    width: 100%;
    background: var(--purple-pc);
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
      background: #522d90;
      border-radius: 2px;
    }
  }
`;
