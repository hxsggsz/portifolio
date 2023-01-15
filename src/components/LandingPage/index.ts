import styled from "styled-components";

export const LandingHeaderStyled = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-top: 40px;
  align-items: center;
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

export const LandingAboutStyled = styled.div`
  border-top: 10px solid white;
  border-bottom: 10px solid white;
  svg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    transform: rotate(3.142rad);
  }
  svg::before {
    content: "";
    display: block;
    width: 100vw;
    background: white;
  }
  .cloud-white {
    margin-top: 5px;
  }
`;
