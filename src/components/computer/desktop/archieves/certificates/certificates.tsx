import { useComputer } from "../../../../../hooks/useComputer"
import { Icon } from "../icon/icon"
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
        icon="/pastas.png"
        name={name}
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() => computer.handleTaskBar("/pastas.png")}
        onChangeBackground={computer.changeBackground}
      />

      <App
        isShow={computer.isAppOpen}
        isFullScreen={computer.isFullScreen}
        onMinus={computer.minimizeApp}
        onFullScreen={computer.handleFullScreen}
        onClose={() => computer.removeiconAndCloseApp("/pastas.png")}
        cert={cert}
      />
    </>
  )
}