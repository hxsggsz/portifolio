import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledConfig = styled.div`
  h1 {
    font-size: max(1rem, 3vw);
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;

  .config-colors {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem 0;
  }

  .purple,
  .blue,
  .green,
  .red,
  .pink,
  .grey,
  .yellow {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 50%;

    @media (max-width: 725px) {
      width: 2rem;
      height: 2rem;
    }
  }

  .purple {
    border: 3px solid var(--purple-dark);
    background: var(--purple-pc);
  }

  .blue {
    border: 3px solid var(--blue-dark);
    background: var(--blue-pc);
  }

  .green {
    border: 3px solid var(--green-dark);
    background: var(--green-pc);
  }

  .red {
    border: 3px solid var(--red-dark);
    background: var(--red-pc);
  }

  .pink {
    border: 3px solid var(--pink-dark);
    background: var(--pink-pc);
  }

  .grey {
    border: 3px solid var(--grey-dark);
    background: var(--grey-pc);
  }

  .yellow {
    border: 3px solid var(--yellow-dark);
    background: var(--yellow-pc);
  }
`;

export const StyledColors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem 1rem;
`;

export const StyledChooseLanguages = styled.div`
  margin-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledWrapperButtons = styled.div`
  display: flex;
  border: none;
  gap: 1rem;
`;

export const StyledButton = styled(motion.button)`  
  cursor: pointer;
  margin: 3rem 0;
  padding: 12px;
  background: none;
  color: var(--white);
  border: 3px solid ${({ theme }) => theme.primary};
`;