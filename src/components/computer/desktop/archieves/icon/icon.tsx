import Image from "next/image";
import { StyledIcon } from ".";
import { MutableRefObject } from "react";

type IconType = {
  icon: string;
  name: string;
  appRef: MutableRefObject<HTMLDivElement | null>
  isBackgroundDifferent: boolean;
  onOpen: () => void;
  onChangeBackground: () => void;
};

export const Icon = (props: IconType) => {
  return (
    <StyledIcon
      drag
      dragElastic={0}
      dragMomentum={false}
      onDoubleClick={props.onOpen}
      dragConstraints={props.appRef}
      onClick={props.onChangeBackground}
      isShow={props.isBackgroundDifferent}
    >
      <Image width={75} height={62} src={props.icon} alt={`icone do ${props.name}`} />
      <p>{props.name}</p>
    </StyledIcon>
  );
};
