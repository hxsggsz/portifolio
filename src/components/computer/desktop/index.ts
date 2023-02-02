import styled from "styled-components";

export const StyledDesktop = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: grid;
  /* grid-gap: 10rem 0; */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: row;
  grid-auto-columns: minmax(1rem, 1fr);
`;
