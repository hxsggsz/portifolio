import styled from "styled-components";

type MenuType = {
  show: boolean;
};

export const NavStyles = styled.nav<MenuType>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 989;
  justify-content: space-between;
  width: 100vw;
  height: 100px;
  background: #000;

  .icon {
    margin-left: 50px;
  }

  .mobile-menu {
    display: flex;
    width: 100%;
    margin-right: 20px;
    justify-content: space-between;
  }

  .button {
    display: none;
    @media (max-width: 790px) {
      cursor: pointer;
      display: flex;
      z-index: 6;
    }
  }

  ul {
    gap: 1.5rem;
    margin-right: 20px;
    list-style: none;
    border-radius: 30px;
    box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);

    @media (max-width: 790px) {
      display: ;
      border-radius: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #000;
      height: 100vh;
      width: 100vw;
      z-index: 4;
      position: fixed;
      left: 0;
      top: ${({ show }) => (show ? 0 : "-6000px")};
      transition: top 0.5s 0.1s ease;
    }
  }

  a {
    z-index: 2;
    cursor: pointer;
    position: relative;
    font-weight: bold;
    font-size: 1.3rem;
    color: #fff;
    @media (max-width: 790px) {
      font-size: 2rem;
    }
  }

  .background {
    inset: 0;
    z-index: -1;
    height: 3px;
    margin-top: 30px;
    border-radius: 30px;
    position: absolute;
    background: #fff;
    @media (max-width: 790px) {
      margin-top: 40px;
    }
  }
`;
