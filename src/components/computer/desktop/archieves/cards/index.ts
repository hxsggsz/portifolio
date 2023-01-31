import styled from "styled-components";

export const StyledCards = styled.div`
  max-width: 40vw;
  min-width: 17rem;
  max-height: 50vh;
  margin-top: 1rem;
  margin-bottom: 20rem;

  @media (max-width: 650px) {
    max-width: 100vw;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 3px solid ${({ theme }) => theme.primary};
    text-align: center;
    padding: 6px;
  }

  .image {
    background: var(--white-pc);
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    width: 100%;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
  }
`;
