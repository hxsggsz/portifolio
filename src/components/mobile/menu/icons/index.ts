import styled from "styled-components";

export const StyledIcon = styled.div`
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.primary};
  border: 5px solid ${({ theme }) => theme.background};
  min-width: 40vw;
`;
