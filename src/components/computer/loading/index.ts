import styled from "styled-components";

export const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem 0;
    padding: 1rem 5rem;
    background: var(--black-pc);
    border: 3px solid ${({ theme }) => theme.primary};
  }

  .code {
    color: ${({ theme }) => theme.primary};
  }
`;
