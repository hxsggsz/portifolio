import Image from "next/image";
import { StyledTaskBar, StyledWrapper } from ".";

type TaskbarTypes = {
  taskBar: {
    id: string;
    image: string;
  }[]
}

export const Taskbar = ({ taskBar }: TaskbarTypes) => {
  return (
    <StyledWrapper>
      <StyledTaskBar>
        {taskBar.length > 0 && taskBar.map(item => (
          <Image key={item.id} width={45} height={45} src={item.image} alt="icon" />
        ))}
      </StyledTaskBar>
    </StyledWrapper>
  )
}