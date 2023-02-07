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
      <Image width={90} height={90} src={image} alt={`icone do ${name}`} />
      <h3>{name}</h3>
    </StyledIcon>
  )
} 