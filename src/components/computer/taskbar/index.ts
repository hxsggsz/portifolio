import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  border: 1px solid var(--black-pc);
  background: ${({ theme }) => theme.primary};
`;

export const StyledTaskBar = styled.div`
  display: flex;
  gap: 0 8px; 
  align-items: center;
  margin-left: 12px;
  
  img:first-child {
    border: 3px solid ${({ theme }) => theme.secondary};
    border-radius: 50%;
  }
`;
