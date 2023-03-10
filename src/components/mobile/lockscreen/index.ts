import { motion } from "framer-motion";
import styled from "styled-components";

type StyledTypes = {
  isLocked: boolean;
};

export const StyledLockScreen = styled.div<StyledTypes>`
  z-index: 9999;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: ${({ isLocked }) => (isLocked ? 0 : "6000px")};
  transition: top 0.5s 10ms ease;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .calendar {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .notification {
    width: 510px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 1rem;
    margin-top: 7rem;
    margin-left: 0.4rem;
    padding: 1rem;
    background: #000;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 520px) {
      width: 100vw;
    }
  }

  .fingerPrint {
    cursor: pointer;
    height: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px 0;
  }
`;
