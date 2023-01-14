import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  :root {
    /* first page colors */
    --midnight-purple-first: #2E1760;
    --black-first: #171738;
    --blue-first: #3423A6;
    --grey-first: #7180B9;
    --white-first: #DFF3E4;
  }
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    width: 100vw;
    height: 100vh;
  }
  body {
    display: flex;
    font-family: Inter;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    min-height: 100%;
    background: #000;
    color: #fff;
    /* &::-webkit-scrollbar {
        width: 15px;
        border: 1px solid black;
        background: ;
      }
      
    &::-webkit-scrollbar-thumb {
      background:;
      border-radius: 2px;
    } */
  } 
  ul {
      list-style: none;
      text-decoration: none;
      display: flex;
   }
`;
