import styled from "styled-components";

type AppTypes = {
  isAppOpen: boolean;
};

export const StyledApp = styled.div<AppTypes>`
  width: 550px;
  height: 100vh;
  z-index: 9999;
  background: var(--black-pc);
  position: absolute;
  top: ${({ isAppOpen }) => (isAppOpen ? 0 : "6000px")};
  transition: top 0.7s 250ms ease;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 2rem 0;
  overflow-y: auto;

  /* scrollbar */
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background: none;
    width: 1vw;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondary};
    border-radius: 2px;
  }

  .closeMenu {
    width: 525px;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 2.6rem;

    @media (max-width: 410px) {
      padding-right: 7rem;
    }
    @media (max-width: 305px) {
      padding-right: 9rem;
    }
  }

  .config-colors,
  .projects {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem 0;
  }

  .config-colors h1,
  .chooseLanguages h1 {
    font-size: min(2.3rem, 7.5vw);
  }

  .chooseLanguages {
    margin-top: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .buttons {
    display: flex;
    gap: 1rem;
  }

  .colors {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .purple,
  .blue,
  .green,
  .red,
  .pink,
  .grey,
  .yellow {
    /* width: 3rem;
    height: 3rem; */
    cursor: pointer;
    border-radius: 50%;
    width: min(3rem, 8vw);
    height: min(3rem, 8vw);
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

  .options,
  .options:disabled {
    cursor: pointer;
    margin: 3rem 0;
    padding: 12px;
    border: 3px solid ${({ theme }) => theme.primary};
    background: var(--black-pc);
    color: var(--white-pc);
  }

  .options:disabled {
    cursor: not-allowed;
  }

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .about h2 {
    max-width: 90vw;
    text-align: center;
    margin-left: 1rem;
  }

  .langs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem 0;
    border: 3px solid ${({ theme }) => theme.primary};
    padding: 1rem;
    min-width: 50vw;
  }

  .cert {
    margin-left: 1.7rem;
  }
  
  .projects {
    margin-left: 1.7rem;
  }
`;
