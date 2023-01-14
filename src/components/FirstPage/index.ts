import styled from "styled-components";

export const HeaderStyled = styled.main`
  display: flex;
  width: 105vw;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  font-size: 1.7rem;
  overflow: hidden;
  padding: 15px 20px;
  background: var(--midnight-purple-first);
  img {
    border-radius: 50%;
    border: 10px solid var(--blue-first);
    z-index: 2;
  }
  h1 {
    z-index: 2;
  }
  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 2000px;
  }
`;

export const ContentStyled = styled.div`
  width: 100%;
  height: 107vh;
  font-size: 1.7rem;
  background: var(--black-first);
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    max-width: 50%;
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
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  button {
    padding: 10px 40px;
    background: var(--black-first);
    color: var(--white-first);
    font-size: 1.7rem;
    font-weight: 700;
  }
  h1 {
    max-width: 50%;
  }
`;
