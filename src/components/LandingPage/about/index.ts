import styled from "styled-components";

export const LandingAboutStyled = styled.div`
  border-top: 10px solid white;
  border-bottom: 100px solid white;
  z-index: 999;
  max-width: 100vw;
  max-height: 100vh;
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
  .text {
    width: 100vw;
    border: 1px solid red;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 999;
    color: black;
  }
`;
