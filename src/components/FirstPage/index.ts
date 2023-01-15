import styled from "styled-components";

export const HeaderStyled = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 15px 20px;
  overflow-y: hidden;
  background: var(--midnight-purple-first);
  font-size: 1.7rem;
  & > div {
    z-index: 2;
  }
  @media (max-width: 773px) {
    justify-content: center;
    flex-direction: column;
    padding: 0;
  }
  img {
    border-radius: 50%;
    border: 10px solid var(--blue-first);
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
    @media (max-width: 768px) {
      max-width: 95%;
      text-align: center;
    }
    @media (max-width: 603px) {
      max-width: 95%;
      font-size: 1.9rem;
      text-align: center;
    }
  }
  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    max-width: 100%;
    @media (max-width: 895px) {
      display: none;
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
  @media (max-width: 730px) {
    justify-content: center;
  }
  h1 {
    max-width: 50%;
    @media (max-width: 955px) {
      max-width: 100%;
    }
    @media (max-width: 694px) {
      font-size: 1.3rem;
    }
    @media (max-width: 603px) {
      max-width: 95%;
      font-size: 1.6rem;
      text-align: center;
      margin-top: 5px;
    }
    @media (max-width: 340px) {
      max-width: 80%;
    }
  }
  img {
    @media (max-width: 955px) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: 400px) {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: 773px) {
    flex-direction: column;
  }
`;
export const ContentTwoStyled = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 1.7rem;
  background: var(--midnight-purple-first);
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
  button {
    cursor: pointer;
    padding: 10px 40px;
    background: var(--black-first);
    color: var(--white-first);
    font-size: 1.7rem;
    font-weight: 700;
    box-shadow: 16px 18px 31px -4px rgba(0, 0, 0, 0.56);
    border-radius: 10px;
    border: 1px solid var(--blue-first);
    @media (max-width: 768px) {
      padding: 10px 20px;
    }
    @media (max-width: 544px) {
      padding: 8px 10px;
      font-size: 1.5rem;
    }
  }
  img {
    @media (max-width: 955px) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: 400px) {
      width: 250px;
      height: 250px;
    }
  }
  h1 {
    max-width: 50%;
    @media (max-width: 1115px) {
      font-size: 2rem;
    }
    @media (max-width: 955px) {
      max-width: 95%;
      font-size: 1.8rem;
      text-align: center;
    }
    @media (max-width: 694px) {
      font-size: 1.3rem;
    }
    @media (max-width: 603px) {
      max-width: 95%;
      font-size: 1.6rem;
      margin-top: 5px;
    }
    @media (max-width: 340px) {
      max-width: 80%;
      margin-bottom: 10px;
    }
  }
`;
