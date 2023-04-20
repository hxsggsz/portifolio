import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  height: 100svh;
  width: 100vw;
  position: relative;
  overflow: hidden;

  .wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: end;
    justify-content: center;
    padding-bottom: 3.5rem;
  }

  .wrapper button {
    z-index: 9;
    cursor: pointer;
    box-shadow: 5px 4px 4px 1px rgba(0, 0, 0, 0.2);
    background: var(--white-pc);
    border: 5px solid #000;
    border-radius: 50%;
    padding: 4px;
    display: flex;
    align-items: center;
  }

  .background {
    bottom: 0;
    left: 0;
    width: 120vw;
    height: 14vh;
    position: absolute;
    background: ${({ theme }) => theme.primary};
  }
`;
