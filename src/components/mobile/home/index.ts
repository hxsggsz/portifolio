import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  width: 525px;
  position: relative;
  overflow: hidden;
  /* z-index: -1; */

  .wrapper {
    /* z-index: -1; */
    position: absolute;
    left: 0;
    bottom: 0;
    width: 525px;
    height: 100vh;
    display: flex;
    align-items: end;
    justify-content: center;
    padding-bottom: 2.5rem;
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
    /* z-index: -2; */
    bottom: 0;
    left: 0;
    width: 120vw;
    height: 14vh;
    position: absolute;
    background: ${({ theme }) => theme.primary};
  }
`;
