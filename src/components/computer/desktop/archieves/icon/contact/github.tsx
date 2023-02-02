import { useRouter } from "next/router"
import { Icon } from "../icon"
import { useComputer } from "../../../../../../hooks/useComputer"
import GithubIcon from "../../../../../../../public/github.png"

export const Github = () => {
  const router = useRouter()
  const computer = useComputer()
  return (
    <>
      <Icon
        icon={GithubIcon.src}
        name="Github"
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() => router.replace("https://www.github.com/hxsggsz/")}
        onChangeBackground={computer.changeBackground}
      />
    </>
  )
}