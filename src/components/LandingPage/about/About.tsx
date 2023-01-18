import { LandingAboutStyled } from "."
import { Clouds } from "../clouds/Clouds"
import { Background } from "./Background"

type AboutType = {
  clouds: {
    id: string
    text: string
  }[],
}

export const About = ({ clouds }: AboutType) => {
  return (
    <LandingAboutStyled>
      <Background />
      
      <Clouds title="Sobre mim!" clouds={clouds} />

    </LandingAboutStyled>
  )
} 