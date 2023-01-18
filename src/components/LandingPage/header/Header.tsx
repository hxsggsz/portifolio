import Image from "next/image"
import { ContentsTypes } from "../../FirstPage/types"
import { LandingHeaderStyled } from "."
import bg from "../../../../public/pexels-stein-egil-liland-13122129.jpg";

export const HeaderLanding = () => {
  return (
    <LandingHeaderStyled style={{ background: `url(${bg.src})`, backgroundSize: 'cover' }}>
      <h1>Olá e seja Bem-vindo</h1>
      <p>Esse é o meu portifólio, algumas informações abaixo</p>
    </LandingHeaderStyled>
  )
} 