import styled from "styled-components";

type StyledCardTypes = {
  isProject?: boolean;
};

export const StyledCards = styled.div<StyledCardTypes>`
  max-width: ${({ isProject }) => (isProject ? "100vw" : "40vw")};
  min-width: 17rem;
  max-height: 50vh;
  margin-top: 1rem;
  margin-bottom: 10rem;

  @media (max-width: 650px) {
    max-width: 100vw;
  }

  & > div {
    display: flex;
    gap: 1rem 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 3px solid ${({ theme }) => theme.primary};
    text-align: center;
    padding: 0 6px 12px 6px;
    overflow-x: hidden;

    @media (max-width: 650px) {
      width: 95vw;
    }
  }

  h2 {
    font-size: 1.3rem;
  }

  .image {
    background: ${({ isProject }) => (isProject ? "none" : "var(--white-pc)")};
    border-bottom: none;
    width: 110%;
  }

  .text {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: start;
    margin-top: 1rem;
    flex-direction: column;
  }

  .buttonsCard {
    display: flex;
    align-items: end;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .buttonCard {
    border: 3px solid ${({ theme }) => theme.primary};
    color: var(--white-pc);
    font-size: 1.7rem;
    font-weight: bold;
    padding: 8px 6px;
  }
`;
