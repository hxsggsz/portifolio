import styled from "styled-components";

export const StyledButton = styled.div`
  h2 {
    max-width: 300px;
    font-size: 1.4em;
  }

  a {
    color: #fff;
  }

  .button {
    position: fixed;
    right: 9%;
    bottom: 7%;
    padding: 0.6rem;
    z-index: 999;
    background: #000;
    border-radius: 50%;
    border: 3px solid #fff;
    display: grid;
    margin-top: 2%;
    place-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #21262d;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    z-index: 999;
    border: 3px solid #fff;
    padding: 1rem;
    gap: 0.4rem;
  }

  .wrapper-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
