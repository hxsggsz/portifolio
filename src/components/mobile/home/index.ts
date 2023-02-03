import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  width: 525px;
  position: relative;
  overflow: hidden;

  .menu {
    cursor: pointer;
    position: absolute;
    bottom: 6%;
    left: 50%;
    box-shadow: 5px 4px 4px 1px rgba(0, 0, 0, 0.2);
    background: var(--white-pc);
    transform: translateX(-50%);
    border: 5px solid #000;
    border-radius: 50%;
    padding: 4px;
    z-index: 9;
  }

  .background {
    bottom: 0;
    left: 0;
    width: 200vw;
    height: 10vh;
    position: absolute;
    background: ${({ theme }) => theme.primary};
  }
`;
