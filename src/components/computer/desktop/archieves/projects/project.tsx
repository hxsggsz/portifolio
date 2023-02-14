import { App } from "../app/app";
import { Icon } from "../icon/icon";
import { useComputer } from "../../../../../hooks/useComputer";

type Projectstypes = {
  projects: {
    id: string
    name: string;
    images: string;
    description: string;
    icon: string;
    urlRepository: string;
    url: string;
    languages: string;
  }
}

export const Project = ({ projects }: Projectstypes) => {
  const computer = useComputer();
  return (
    <>
      <Icon
        key={projects.id}
        icon={projects.icon}
        name={projects.name}
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() => computer.handleTaskBar(projects.icon)}
        onChangeBackground={computer.changeBackground}
      />

      <App
        isShow={computer.isAppOpen}
        isFullScreen={computer.isFullScreen}
        onMinus={computer.minimizeApp}
        onFullScreen={computer.handleFullScreen}
        onClose={() => computer.removeiconAndCloseApp(projects.icon)}
        isProject={true}
        project={projects}
      />
    </>
  )
}

