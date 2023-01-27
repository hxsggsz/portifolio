import { StyledDesktop } from ".";
import { Icons } from "./icons/icons";
import bg from "../../../../public/wallpaper.jpg";

export const Desktop = () => {
   return (
      <StyledDesktop style={{ background: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
         <Icons />
      </StyledDesktop>
   )
}