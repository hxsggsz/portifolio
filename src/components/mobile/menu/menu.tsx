import { X } from "phosphor-react";
import { StyledMenu } from ".";
import { Dispatch, SetStateAction } from "react";
import { Config } from "./config/config";
import { About } from "./about/about";

type MenuTypes = {
  isShowMenu: boolean
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
  about: {
    id: string;
    text: string;
    image: string;
  }[];
}

export const Menu = ({ isShowMenu, setIsShowMenu, about }: MenuTypes) => {
  return (
    <StyledMenu isShowMenu={isShowMenu}>
      <div className="closeMenu">
        <X onClick={() => setIsShowMenu(!isShowMenu)} style={{ cursor: "pointer" }} size={35} color={"white"} />
      </div>

      <div className="container">
        <Config name="Configurações" />
        <About name={"SobreMim.txt"} about={about} />
      </div>
    </StyledMenu>
  )
}