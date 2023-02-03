import { useComputer } from "../../../../../hooks/useComputer"
import { Icon } from "../icon/icon"
import pastas from "../../../../../../public/pastas.png"
import { App } from "../app/app"

type CertTypes = {
  name: string;
  cert: {
    id: string;
    name: string;
    images: string;
    description: string;
  }[]
}

export const Certificates = ({ name, cert }: CertTypes) => {
  const computer = useComputer()

  return (
    <>
      <Icon
        icon={pastas.src}
        name={name}
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() => computer.handleTaskBar(pastas.src)}
        onChangeBackground={computer.changeBackground}
      />

      <App
        isShow={computer.isAppOpen}
        isFullScreen={computer.isFullScreen}
        onMinus={computer.minimizeApp}
        onFullScreen={computer.handleFullScreen}
        onClose={() => computer.removeiconAndCloseApp(pastas.src)}
        cert={cert}
      />
    </>
  )
}