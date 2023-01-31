import Image from "next/image";
import { StyledIcon } from ".";

type IconType = {
  icon: string;
  name: string;
  isOpen: boolean;
  onOpen: () => void;
  onChangeBackground: () => void;
}

export const Icon = ({ icon, name, isOpen, onOpen, onChangeBackground }: IconType) => {
  return (
    <StyledIcon isShow={isOpen}>

      <div
        className="icon"
        onDoubleClick={onOpen}
        onClick={onChangeBackground}
      >
        <Image width={70} height={70} src={icon} alt={`icone do ${name}`} />
        <p>{name}</p>
      </div>
    </StyledIcon>
  )
}