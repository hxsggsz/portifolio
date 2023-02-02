import { useRouter } from "next/router"
import { useComputer } from "../../../../../../hooks/useComputer"
import { Icon } from "../icon"

export const Linkedin = () => {
  const router = useRouter()
  const computer = useComputer()
  return (
    <>
      <Icon
        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"}
        name="linkedin"
        isBackgroundDifferent={computer.isChangeBackground}
        onOpen={() => router.replace("https://www.linkedin.com/in/hxsggsz/")}
        onChangeBackground={computer.changeBackground}
      />
    </>
  )
}