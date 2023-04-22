import { Icon } from "../icon"
import { useRouter } from "next/router"
import { MutableRefObject } from "react"
import { useComputer } from "../../../../../../hooks/useComputer"

type LinkIconType = {
  name: string
  icon: string
  link: string
  appRef: MutableRefObject<HTMLDivElement | null>
}

export const LinkIcon = (props: LinkIconType) => {
  const router = useRouter()
  const computer = useComputer()

  return (
    <Icon
      name={props.name}
      icon={props.icon}
      appRef={props.appRef}
      onOpen={() => router.replace(props.link)}
      onChangeBackground={computer.changeBackground}
      isBackgroundDifferent={computer.isChangeBackground}
    />
  )
}