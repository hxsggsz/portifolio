import styled from "styled-components";

export const StyledTaskBar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  border: 1px solid var(--black-pc);
  background: ${({ theme }) => theme.primary};

  .taskbar-content {
    display: flex;
    gap: 0 8px;
    align-items: center;
    margin-left: 12px;
  }

  .taskbar-content img {
    border-radius: 50%;
  }
`;
