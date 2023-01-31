import styled from "styled-components";

type IconTypes = {
  isShow: boolean;
};

export const StyledIcon = styled.div<IconTypes>`
  .icon {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6px;
    background: ${({ isShow, theme }) => (isShow ? theme.background : "none")};
    border-radius: 4px;
    border: ${({ isShow, theme }) => (isShow ? theme.secondary : "none")};
    user-select: none;
  }
`;
