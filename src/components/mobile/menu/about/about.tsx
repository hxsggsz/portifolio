import { useMobile } from "../../../../hooks/useMobile";
import { App } from "../app/app"
import { Icon } from "../icons/icons"
import arquivo from "../../../../../public/arquivo.png"

type AboutTypes = {
  name: string;
  about: {
    id: string;
    text: string;
    image: string;
  }[];
}

export const About = ({ name, about }: AboutTypes) => {
  const mobile = useMobile();
  return (
    <>
      <Icon setIsAppOpen={mobile.handleApp} image={arquivo.src} name={name} />
      <App isAppOpen={mobile.isAppOpen} onAppOpen={mobile.handleApp} about={about} />
    </>
  )
}