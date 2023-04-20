import styled from "styled-components";

export const StyledCardLang = styled.div`
  display: grid;
  grid-gap: 1rem;
  place-items: center;
  margin: 0.5rem 2rem;
  padding: 12px;
  width: 25vw;
  height: 30vh;
  border: 4px solid ${({ theme }) => theme.primary};
  
  img {
    object-fit: contain;
  }

  @media (max-width: 677px) {
    width: 35vw;
  }
`;
