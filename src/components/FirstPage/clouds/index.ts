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
      text-align: center;
      margin-top: 5px;
    }
  }

  img {
    @media (max-width: 607px) {
      max-width: 100%;
      height: 300px;
    }
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
