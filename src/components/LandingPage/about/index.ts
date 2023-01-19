import styled from "styled-components";

export const LandingAboutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > div {
    display: flex;
    align-items: center;
    text-align: center;
  }

  & > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }

  img {
    z-index: 2;
  }

  .ref {
    width: 100vw;
  }

  .wrapper {
    display: flex;
    gap: 0.7rem;
    margin-left: 1%;
  }

  .content {
    width: 35vw;
    height: 52vh;
    padding: 1rem;
    font-size: min(1.1rem, 3vw);
    background: #21262d;
    border-radius: 10px;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
  }
`;
