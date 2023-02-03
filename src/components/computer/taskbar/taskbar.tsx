import Image from "next/image";
import { StyledTaskBar } from ".";
import { useTaskBar } from "../../../context/taskBarContext";

export const Taskbar = () => {
  const { taskBar } = useTaskBar()
  return (
    <StyledTaskBar>
      <div className="taskbar-content">
        {/* fazer isso funcionar */}
        {taskBar.length > 0 && taskBar.map(item => (
          <Image key={item.id} width={50} height={50} src={item.image} alt="icon" />
        ))}
      </div>
    </StyledTaskBar>
  )
}