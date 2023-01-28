import styled from "styled-components";

type IconTypes = {
  isShow: boolean;
  isFullScreen: boolean;
};

export const StyledIcons = styled.div<IconTypes>`
  .icon {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6px;
    background: ${({ isShow }) => (isShow ? "rgba(126, 70, 221,0.6)" : "none")};
    border-radius: 4px;
    border: ${({ isShow }) => (isShow ? "2px solid #522d90" : "none")};
    user-select: text;
  }

  .app {
    position: absolute;
    top: 0;
    left: ${({ isFullScreen }) => (isFullScreen ? "0" : "25%")};
    background: var(--black-pc);
    border: 3px solid var(--purple-pc);
    max-width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "55vw")};
    height: 100vh;
    overflow-y: auto;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 2rem;
  }
`;
