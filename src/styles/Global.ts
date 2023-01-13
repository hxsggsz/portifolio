import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  :root {
    /* first page colors */
    --black-first: #1A090D;
    --purple-first: #4A314D;
    --purple-light-first: #6B6570;
    --white-first: #A8BA9A;
    --green-first: #ACE894;
  }
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    font-family: Inter;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
