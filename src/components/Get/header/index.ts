import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100vw;
  padding: 1rem 0;
  left: 0;
  top: 0;
  position: fixed;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: var(--grey-dark);
  pointer-events: none;

  a {
    color: var(--white-google);
  }
`;
