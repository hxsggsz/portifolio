import styled from "styled-components";
// Clouds
export const CloudsStyled = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  & > div {
    overflow: hidden;
    position: relative;
    display: flex;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  h1 {
    color: black;
    min-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 4;
    margin-top: 20%;
    text-align: center;
  }
  .div-cloud {
    display: flex;
    padding: 5rem;
    align-items: center;
    justify-content: center;
  }
  .title {
    position: relative;
    font-size: 2rem;
  }
`;

// smallClouds

export const SmallCloudsStyled = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  background: #87ceeb;

  .title {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .container {
    flex-direction: row;
    gap: 1rem;
    z-index: 5;
    display: flex;
  }
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: black;
    z-index: 5;
    font-size: min(1.5rem, 4vw);
  }

  img {
    @media (max-width: 570px) {
      max-width: 170px;
      max-height: 120px;
      z-index: 5;
    }
  }
`;
