import styled from "styled-components";

export const StyledTaskBar = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  border: 1px solid var(--black-pc);
  background: var(--purple-pc);

  .taskbar-content {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }

  .taskbar-content img {
    border-radius: 50%;
  }
`;
