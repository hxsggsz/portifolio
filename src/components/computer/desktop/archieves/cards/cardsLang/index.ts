import styled from "styled-components";

export const StyledCardLang = styled.div`
  display: grid;
  grid-gap: 1rem 0;
  place-items: center;
  margin: 1rem 0;
  padding: 12px;
  width: 20vw;
  height: 12vw;
  border: 4px solid ${({ theme }) => theme.primary};
`;
