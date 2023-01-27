import Image from "next/image";
import { StyledIcons } from ".";
import icon from "../../../../../public/flower2.png"
import { useState } from "react";

export const Icons = () => {
  const [isChangeBackground, setIsChangeBackground] = useState<boolean>(false)
  return (
    <StyledIcons isShow={isChangeBackground}>
      <div className="icon" onClick={() => setIsChangeBackground(!isChangeBackground)}>
        <Image width={100} height={100} src={icon} alt="icon" />
        <p>nome do icone</p>
      </div>
    </StyledIcons>
  )
}