import Image from "next/image";
import { StyledTaskBar } from ".";

type TaskbarTypes = {
  taskBar: {
    id: string;
    image: string;
  }[]
}

export const Taskbar = ({taskBar}: TaskbarTypes) => {
  return (
    <StyledTaskBar>
      <div className="taskbar-content">
        {taskBar.length > 0 && taskBar.map(item => (
          <Image key={item.id} width={45} height={45} src={item.image} alt="icon" />
        ))}
      </div>
    </StyledTaskBar>
  )
}