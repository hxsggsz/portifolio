import styled from "styled-components";

export const StyledConfig = styled.div`
  h1 {
    font-size: max(1rem, 3vw);
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .config-colors {
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
  }

  .title-colors {
    font-size: max(1rem, 3vw);
  }

  .colors {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15rem 1rem;
  }

  .purple,
  .blue,
  .green,
  .red,
  .pink,
  .grey,
  .yellow {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 50%;

    @media (max-width: 725px) {
      width: 2rem;
      height: 2rem;
    }
  }

  .purple {
    border: 3px solid var(--purple-dark);
    background: var(--purple-pc);
  }

  .blue {
    border: 3px solid var(--blue-dark);
    background: var(--blue-pc);
  }

  .green {
    border: 3px solid var(--green-dark);
    background: var(--green-pc);
  }

  .red {
    border: 3px solid var(--red-dark);
    background: var(--red-pc);
  }

  .pink {
    border: 3px solid var(--pink-dark);
    background: var(--pink-pc);
  }

  .grey {
    border: 3px solid var(--grey-dark);
    background: var(--grey-pc);
  }

  .yellow {
    border: 3px solid var(--yellow-dark);
    background: var(--yellow-pc);
  }

  .languages {
    display: flex;
    gap: 4rem 1rem;
  }

  .options {
    cursor: pointer;
    margin: 3rem 0;
    padding: 12px;
    border: 3px solid ${({ theme }) => theme.primary};
  }
`;
