import styled from "styled-components";

type MenuTypes = {
  isShowMenu: boolean;
};

export const StyledMenu = styled.div<MenuTypes>`
  z-index: 99;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: ${({ isShowMenu }) => (isShowMenu ? 0 : "6000px")};
  transition: top 0.7s 250ms ease;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background: var(--black-pc);

  .closeMenu {
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 3.5rem;

  }

  .container {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: 2rem;
    overflow-y: auto;

    /* scrollbar */
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      background: none;
      width: 1vw;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.secondary};
      border-radius: 2px;
    }
  }
`;
