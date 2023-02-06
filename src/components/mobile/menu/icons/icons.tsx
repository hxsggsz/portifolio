import Image from "next/image";
import { StyledIcon } from ".";

type IconTypes = {
  image: string;
  name: string;
  setIsAppOpen: () => void;
}

export const Icon = ({ image, name, setIsAppOpen }: IconTypes) => {
  return (
    <StyledIcon onClick={setIsAppOpen}>
      <Image width={110} height={110} src={image} alt={`icone do ${name}`} />
      <h2>{name}</h2>
    </StyledIcon>
  )
}