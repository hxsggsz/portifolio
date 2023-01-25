import styled from "styled-components";

export const StyledLogin = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   h2 {
      font-weight: 200;
   }

   label {
      display: flex;
      align-items: center;
      flex-direction: column;
   }

   form {
      display: flex;
      align-items: center;
      gap: 6px;
   }

   .fake-input {
      width: 250px;
      height: 25px;
      background: var(--white-google);
      border: 2px solid #000;
      user-select: none;
   }
   
   .fake-input p {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      color: #000;

   }

   button {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      border-radius: 50%;
      background: linear-gradient(#033e83, #0192ea);
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
   }
      `;