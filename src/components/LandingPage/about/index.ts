import styled from "styled-components";

export const LandingAboutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
   
  & > div {
    display: flex;
    text-align: center;
    align-items: center;
  }

  & > h1 {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    z-index: 2;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .ref {
    width: 98vw;
  }

  .wrapper {
    display: flex;
    gap: 0.7rem;
  }

  .content {
    width: 35vw;
    height: 52vh;
    padding: 1rem;
    font-weight: bold;
    font-size: min(1.1rem, 3vw);
    background: #21262d;
    border-radius: 10px;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;
