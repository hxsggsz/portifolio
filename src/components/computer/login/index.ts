import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--black-pc);

  img {
    background: var(--white-pc);
    border-radius: 51%;
    border: 3px solid white;
  }

  label {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  form {
    width: 20rem;
    height: 34px;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    background: var(--white-pc);
    border-radius: 6px;
    border: 2px solid #000;
    user-select: none;
  }

  .eye {
    display: flex;
    gap: 4px;
  }

  .fake-input {
    background: none;
    border: none;
    width: 100%;
    color: var(--black-pc);
    font-size: 1.2rem;
  }
`;
