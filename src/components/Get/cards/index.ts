import styled from "styled-components";

export const StyledCard = styled.div`
   width: 100vw;
   background: var(--grey-dark);
   display: flex;
   gap: 10px;
   margin-top: 6rem;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   overflow-y: auto;

   & > h1 {
      max-width: 100%;
      margin-top: 16px;
      margin-left: 28px;
   }

   .card {
      max-width: 40vw; 
      padding: 8px;
      margin: 0 20px;
      display: flex;
      gap: 1rem;
      align-items: center;
      position: relative;

      @media(max-width: 928px) {
         max-width: 60vw;

      }
      @media(max-width: 655px) {
         max-width: 100vw;

      }
   }
   
   .card img {
      border-radius: 8px;
      position: relative;
      right: 0;
   }

   .content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 50rem;
   }

   .content h1 {
      color: var(--blue-google);
      font-size: min(32px, 4vw);
   }
   
   .content p {
      font-size: min(16px, 4vw);
   }
`;