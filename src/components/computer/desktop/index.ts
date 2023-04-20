import styled from "styled-components";

export const StyledDesktop = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: row;
  grid-auto-columns: minmax(1rem, 1fr);
`;

export const StyledContent = styled.div`
    display: grid;
    place-items: center;
    grid-gap: 0 3rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: repeat(2, 1fr);
    grid-auto-columns: minmax(1rem, 1fr);
    margin-bottom: 7rem;
  `;

export const StyledProjects = styled.div`
  width: 100%;
  margin-bottom: 5rem;  
`;