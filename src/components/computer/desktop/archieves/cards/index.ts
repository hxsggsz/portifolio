import { motion } from "framer-motion";
import styled from "styled-components";

type StyledCardTypes = {
  isProject?: boolean;
};

export const StyledWrapper = styled.div<StyledCardTypes>`
  max-width: ${({ isProject }) => (isProject ? "100vw" : "40vw")};
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  border: 3px solid
  ${({ theme, isProject }) => (isProject ? "none" : theme.primary)};
  text-align: center;
  padding: 0 6px 12px 6px;
  overflow: hidden;

  @media (max-width: 650px) {
    width: 95vw;
    padding-bottom: 5rem;
  }

  .buttonsCard {
    
  }

  .buttonCard {
   
  }
`;

export const StyledImage = styled.div<StyledCardTypes>`
  width: 110%;
  border-bottom: none;
  background: ${({ isProject }) => (isProject ? "none" : "var(--white-pc)")};
  
  img {
    object-fit: fill;
  }
  `;

export const StyledText = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
  margin: 2rem 0;
  flex-direction: column;

  h2 {
    font-size: 1.3rem;
  }


  h3 {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  `;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledButton = styled(motion.button)`
  border: 3px solid ${({ theme }) => theme.primary};
  background: inherit;
  cursor: pointer;
  color: var(--white-pc);
  font-size: 1.7rem;
  font-weight: bold;
  padding: 8px 6px;
`;