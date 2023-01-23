import styled from "styled-components";

export const StyledGet = styled.div`
   background: var(--grey-dark);
   width: 100vw;
   height: 100vh;
   display: flex;
   gap: 1rem;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   user-select: none;

   & > h1 {
      color: var(--white-google);
      font-size: 5em;
      font-weight: bold
   }

   form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
   }

   label {
      cursor: text;
      display: flex;
      gap: 0.5em;
      align-items: center;
      padding: 0.5rem 0.9rem;
      border: 1px solid var(--grey-light);
      border-radius: 50px;
   }

   label:hover, label:focus {
    background: var(--grey-light);
   }

   input {
      outline: none;
      height: 2em;
      min-width: 30vw;
      background: inherit;
      border: none;
      color: var(--white-google);
      font-size: 1.2em;
   }

   .buttons {
      display: flex;
      gap: 0.3em;
      justify-content: center;
      

   }

   .buttons button {
      padding: 0.5rem 1rem;
      cursor: pointer;
      color: var(--white-google);
      font-size: 1.2em;
      border-radius: 4px;
      border: 1px solid var(--grey-light);
      background: var(--grey-light);
   }
   .buttons button:hover {
      border: 1px solid var(--white-google);
   }
`;