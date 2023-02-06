import styled from "styled-components";

type MenuTypes = {
  isShowMenu: boolean;
};

export const StyledMenu = styled.div<MenuTypes>`
  z-index: 99;
  width: 550px;
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
    width: 525px;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 3.5rem;

    @media (max-width: 410px) {
      padding-right: 7rem;
    }
    @media (max-width: 305px) {
      padding-right: 9rem;
    }
  }

  .container {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: 2rem;
    overflow-y: auto;
  }
`;
