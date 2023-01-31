import Image from "next/image";
import { StyledIcon } from ".";

type IconType = {
  icon: string;
  name: string;
  isBackgroundDifferent: boolean;
  onOpen: () => void;
  onChangeBackground: () => void;
};

export const Icon = ({
  icon,
  name,
  isBackgroundDifferent,
  onOpen,
  onChangeBackground,
}: IconType) => {
  return (
    <StyledIcon isShow={isBackgroundDifferent}>
      <div className="icon" onDoubleClick={onOpen} onClick={onChangeBackground}>
        <Image width={70} height={70} src={icon} alt={`icone do ${name}`} />
        <p>{name}</p>
      </div>
    </StyledIcon>
  );
};
