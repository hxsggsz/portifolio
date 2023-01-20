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

    @media (max-width: 390px) {
      width: 220px;
      height: 150px;
    }

    @media (max-width: 255px) {
      width: 150px;
      height: 100px;
    }
  }
  
  .ref {
    width: 98vw;
    
    @media (max-width: 425px) {
      width: 95vw;
    }
  }

  .wrapper {
    display: flex;
    gap: 0.7rem;
  }

  .content {
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: min(1.1rem, 3vw);
    background: #21262d;
    border-radius: 10px;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 425px) {
      max-width: 95vw;
    }
  }
  .content p {
    font-size: min(16px, 5vw)
  }
`;
