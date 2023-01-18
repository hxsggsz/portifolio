import styled from "styled-components";
// Clouds
export const CloudsStyled = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    overflow: hidden;
    position: relative;
    display: flex;
  }

  h1 {
    color: #000;
    font-size: 1.6rem;
    text-align: center;
    max-width: 94%;

    @media (max-width: 694px) {
      font-size: 1.3rem;
    }

    @media (max-width: 603px) {
      /* font-size: 1.6rem; */
      text-align: center;
      margin-top: 5px;
    }

    @media (max-width: 355px) {
      /* font-size: 1.2rem; */
    }
  }

  img {
    @media (max-width: 607px) {
      max-width: 100%;
      height: 300px;
    }

    /* @media (max-width: 455px) {
      width: 400px;
      height: 300px;
    }

    @media (max-width: 405px) {
      width: 350px;
      height: 300px; 
    } */
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
    justify-content: center;
    align-items: center;
    padding-top: 7rem;
    height: 100%;
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
