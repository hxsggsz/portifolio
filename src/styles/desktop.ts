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
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 7rem;
  `;

export const StyledProjects = styled.div`
  width: 100%;
  margin-bottom: 5rem;  
`;