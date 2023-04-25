import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--black-pc);

  img {
    background: var(--white-pc);
    border-radius: 51%;
    border: 3px solid ${({ theme }) => theme.primary};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  width: 20rem;
  height: 34px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  background: var(--white-pc);
  border-radius: 6px;
  border: 3px solid ${({ theme }) => theme.primary};
  user-select: none;
`;

export const StyledInput = styled.input`  
  background: none;
  border: none;
  width: 100%;
  color: var(--black-pc);
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledEye = styled.div`  
  display: flex;
  gap: 4px;
`;