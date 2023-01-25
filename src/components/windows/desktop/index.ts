import styled from "styled-components";

export const StyledDesktop = styled.div`
   width: 100vw;
   height: 100vh;

   .logo {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
   }

   .taskbar {
      border: 1px solid #000;
      background: #a7c0dc;
      width: 100%;
      height: 7%;
      bottom: 0;
      left: 0;
      position: absolute;
      display: flex;
      align-items: center;
   }

   .taskbar-content {
      margin-left: 12px;
   }

   .win-button {
      padding: 4px;
      background: #2578a1;
      border: 1px solid #000;
      border-radius: 50%;
   }
`;