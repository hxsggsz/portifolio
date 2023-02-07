import styled from "styled-components";

export const StyledIcon = styled.div`
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.primary};
  border: 5px solid ${({ theme }) => theme.background};
  width: 40vw;

  @media (max-width: 395px) {
    width: 50vw;
  }
  @media (max-width: 295px) {
    width: 70vw;
  }
`;
