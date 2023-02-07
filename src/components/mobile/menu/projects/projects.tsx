import { useMobile } from "../../../../hooks/useMobile"
import { App } from "../app/app"
import { Icon } from "../icons/icons"

type ProjectsTypes = {
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

export const Projects = ({ projects }: ProjectsTypes) => {
  const mobile = useMobile()
  return (
    <>
      <Icon
        setIsAppOpen={mobile.handleApp}
        image={projects.icon}
        name={projects.name}
      />
      <App
        isAppOpen={mobile.isAppOpen}
        onAppOpen={mobile.handleApp}
        isProject={true}
        project={projects}
      />
    </>
  )
}