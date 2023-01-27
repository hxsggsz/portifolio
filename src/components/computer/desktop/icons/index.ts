import styled from "styled-components";

type IconTypes = {
  isShow: boolean;
};

export const StyledIcons = styled.div<IconTypes>`
  .icon {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6px;
    background: ${({ isShow }) => (isShow ? "rgba(126, 70, 221,0.6)" : "none")};
    border-radius: 4px;
    border: ${({ isShow }) => (isShow ? "2px solid #522d90" : "none")};
  }
`;
