import Image from "next/image";
import { StyledTaskBar } from ".";
import bg from "../../../../../public/wallpaper.jpg";

export const Taskbar = () => {
  return (
    <StyledTaskBar>
      <div className="taskbar-content">
        <Image width={50} height={50} src={bg} alt="icon" />
      </div>
    </StyledTaskBar>
  )
}