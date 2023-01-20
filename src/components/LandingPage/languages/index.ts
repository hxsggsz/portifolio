import styled from "styled-components";

export const StyledLanguages = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   flex-direction: column;

   h1 {
      margin-bottom: 10%;
   }
   .text {
      font-size: 1.6rem;
   }
   
   .container {
      width: 100vw;
   display: grid;
   place-items: center;
   grid-gap: 16px;
   grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); /* 3 columns */
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