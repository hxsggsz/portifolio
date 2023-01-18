import styled from "styled-components";

export const LandingAboutStyled = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  /* position: relative; */

  & > div {
    display: flex;
    align-items: center;
    text-align: center;
    /* position: absolute; */
  }

  & > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    z-index: 2;
  }
  .wrapper {
    display: flex;
    gap: 1rem;
  }

  .content {
    width: 30vw;
    height: 40vh;
    padding: 1rem;
    font-size: min(1.1rem, 3vw);
    background: #21262d;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;
