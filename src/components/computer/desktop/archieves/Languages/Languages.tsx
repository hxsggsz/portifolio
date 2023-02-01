import { App } from "../app/app"
import { Icon } from "../icon/icon"
import pastas from "../../../../../../public/pastas.png"
import { useComputer } from "../../../../../hooks/useComputer"

type LangTypes = {
  lang: {
    name: string
    images: string
  }[]
}

export const Languages = ({ lang }: LangTypes) => {
  const computer = useComputer()
  return (
    <>
      <Icon icon={pastas.src} name="Linguages" isBackgroundDifferent={computer.isChangeBackground} onOpen={computer.handleApp} onChangeBackground={computer.changeBackground} />

      <App lang={lang} isShow={computer.isAppOpen} isFullScreen={computer.isFullScreen} onMinus={computer.handleApp} onFullScreen={computer.handleFullScreen} onClose={computer.handleApp} />
    </>
  )
}