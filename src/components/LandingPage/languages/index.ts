import styled from "styled-components";

export const StyledLanguages = styled.div`
  display: flex;
   align-items: center;
   flex-direction: column;
   text-align: center;

   h1 {
      margin-bottom: 10%;
      font-size: min(2.5rem, 10vw)
   }
   
   .text {
      font-size: 1.6rem;
   }
   
   .container {
      width: 100vw;
      display: grid;
      place-items: center;
      grid-gap: 1.2rem;
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
      grid-template-rows: repeat(4, 1fr)
      grid-auto-flow: row;
      grid-auto-columns: minmax(1rem, 1fr);
}

   .card {
      justify-content: center;
      display: flex;
      align-items: center;
      padding: 1rem;
      border-radius: 10px;
      flex-direction: column;
      background: #21262d;
      border: 3px solid #fff;
   }
`;