import styled from "styled-components";

export const LandingpageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-height: 80vh;
  max-width: 100vw;
  gap: 10px;
  border: 5px solid red;
  & > div {
    padding: 10px;
    overflow: hidden;
    position: relative;
    border: 5px solid black;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    color: black;
  }
  .div-cloud {
    overflow: hidden;
    border: 5px solid orange;
    display: flex;
    padding: 28rem;
    align-items: center;
    justify-content: center;
  }
`;
