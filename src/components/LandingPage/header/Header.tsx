import { LandingHeaderStyled } from ".";
import bg from "../../../../public/pexels-stein-egil-liland-13122129.jpg";

type HeaderTypes = {
  title: string;
  description: string;
}

export const HeaderLanding = ({ title, description }: HeaderTypes) => {
  return (
    <LandingHeaderStyled id="header" style={{ background: `url(${bg.src})`, backgroundSize: "cover" }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </LandingHeaderStyled>
  )
} 