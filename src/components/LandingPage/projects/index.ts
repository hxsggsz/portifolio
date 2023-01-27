import styled from "styled-components";

export const StyledProjects = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   background: #000;
   
   & > h1 {
      margin: 5rem 0;
   }

   .container {
      width: 100%;
      display: grid;
      place-items: center;
      grid-gap: 1.2rem;
      grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
      grid-template-rows: repeat(4, 1fr)
      grid-auto-flow: row;
      grid-auto-columns: minmax(1000px, 1fr);
   }

   .card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #21262d;
      max-width: 380px;
      max-height: 490px;
      padding: 0 10px;
      overflow: hidden;
      border-radius: 8px;
      border: 3px solid #fff;
   }
   
   .card img {
      border-radius: 8px 8px 0 0;
   }

   .texts {
      gap: 0.6rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
   }

   .buttons {
      gap: 4px;
      display: flex;
      justify-content: center;
   }
   
   .buttons button {
      padding: 4px 8px;
      font-size: 1.2rem;
      font-weight: 600;
      background: #000;
      border-radius: 4px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
   }
   
   .buttons button a {
      color: #fff;
   }
`