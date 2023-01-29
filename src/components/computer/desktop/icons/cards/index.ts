import styled from "styled-components";

export const StyledCards = styled.div`
  max-width: 30vw;
  max-height: 30vh;
  margin-top: 1rem;
  margin-bottom: 20rem;
  
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 3px solid var(--purple-pc);
    text-align: center;
    padding: 6px;
  }

  .image {
    background: var(--white-pc);
    border-bottom: 3px solid var(--purple-pc);
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
