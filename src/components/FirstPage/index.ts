import styled from "styled-components";

export const HeaderStyled = styled.main`
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 0;
    gap: 1.5rem;
    justify-content: center;
    flex-direction: column;
  }

  svg {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  & > div {
    z-index: 2;
  }
  img {
    border-radius: 50%;
    border: 10px solid var(--blue-sky);
    @media (max-width: 895px) {
      width: 350px;
      height: 350px;
      margin-bottom: 45px;
    }
    @media (max-width: 386px) {
      width: 250px;
      height: 250px;
    }
  }
  h1 {
    z-index: 2;
    max-width: 50%;
    font-size: max(1.9rem, 5vw);

    @media (max-width: 768px) {
      max-width: 95%;
      text-align: center;
    }
  }
`;

export const ContentStyled = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 1.7rem;
  background: var(--black-first);
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }

  .background {
    position: absolute;
    width: 100vw;
    height: 111vh;
    transform: rotate(3.142rad);
  }

  .background::before {
    content: "";
    display: block;
    width: 100vw;
    background: white;
  }

  .cloud-white {
    margin-top: 5px;
  }
`;

export const ContentTwoStyled = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 1.7rem;
  background: var(--blue-sky);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 955px) {
    gap: 20px;
  }
  @media (max-width: 544px) {
    gap: 40px;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 773px) {
      flex-direction: column;
    }
  }

  .bird {
    cursor: pointer;
  }
`;
