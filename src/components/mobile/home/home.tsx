import { DiamondsFour } from "phosphor-react"
import { StyledHome } from "."
import bg from "../../../../public/wallpaper.jpg"

export const Home = () => {
  return (
    <StyledHome style={{
      background: `url(${bg.src})`, backgroundSize: "cover",
      backgroundPosition: "center center",
    }}>
      <button className="menu"><DiamondsFour size={50} weight="bold" /></button>
      <div className="background"/>
    </StyledHome>
  )
}