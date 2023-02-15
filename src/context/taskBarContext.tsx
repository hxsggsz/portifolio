import bg from "../../public/wallpaper.jpg"
import { ReactNode, createContext, useContext, useState, useId } from "react";

interface ThemeTypes {
  children: ReactNode;
}

interface StateProps {
  taskBar: {
    id: string;
    image: string;
  }[]
  setIconToTaskBar: (image: string) => void
  removeIconFromTaskBar: (image: string) => void
};

export const TaskBarContext = createContext({} as StateProps);


export const useTaskBar = () => useContext(TaskBarContext);


export const TaskBarProvider = ({ children }: ThemeTypes) => {
  const id = useId()
  const [taskBar, setTaskBar] = useState([{ id, image: bg.src }]);

  const setIconToTaskBar = (image: string) => {
    const checkEquals = taskBar.find(img => img.image === image)
    if (checkEquals) {
      return taskBar
    }
    setTaskBar([...taskBar, { id, image }]);
  }

  const removeIconFromTaskBar = (image: string) => {
    const findIcon = taskBar.filter(img => img.image != image)
    setTaskBar(findIcon)
  }

  return (
    <TaskBarContext.Provider value={{ taskBar, setIconToTaskBar, removeIconFromTaskBar }}>
      {children}
    </TaskBarContext.Provider>
  );
};
