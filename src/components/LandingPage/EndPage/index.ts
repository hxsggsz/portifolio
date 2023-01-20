import styled from "styled-components";

export const StyledEndPage = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;

   & > div {
      background: #21262d;
      padding: 20px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
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
   a {
      color: #fff;
   }
`