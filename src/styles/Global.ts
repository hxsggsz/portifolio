import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    font-family: Ubuntu Condensed;
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