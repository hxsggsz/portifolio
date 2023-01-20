import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  :root {
    /* first page colors */
    --midnight-purple-first: #2E1760;
    --black-first: #171738;
    --blue-first: #3423A6;
    --blue-sky: #87ceeb;
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
    width: 100%;
    height: 100%;
  }
  body {
    display: flex;
    font-family: Inter;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    min-height: 100%;
    background: #000;
    color: #fff;
     &::-webkit-scrollbar {
    width: 0.7vw;
    border: 1px solid black;
    background: #323333;
  }

  &::-webkit-scrollbar-thumb {
  background: rgba(169, 169, 169, 0.4);
    border-radius: 2px;
  }
} 
  a {
    text-decoration: none;
  }
  ul {
      list-style: none;
      display: flex;
   }
`;
