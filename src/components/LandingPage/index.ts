import styled from "styled-components";

export const LandingHeaderStyled = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-top: 40px;
  align-items: center;
  z-index: 999;
  justify-content: space-evenly;
  background: blue;
  .images {
    z-index: 2;
  }
  img {
    border-radius: 50%;
    border: 5px solid black;
  }
  h1 {
    z-index: 2;
    font-size: 5rem;
  }
  svg {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
`;
