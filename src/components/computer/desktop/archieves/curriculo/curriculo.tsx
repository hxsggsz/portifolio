import { Icon } from "../icon/icon";
import arquivo from "../../../../../../public/arquivo.png"
import { useComputer } from "../../../../../hooks/useComputer";
import Link from "next/link";

type LangTypes = {
  name: string;
  href: string;
};

export const Curriculo = ({ name, href }: LangTypes) => {
  const computer = useComputer();
  return (
    <>
      <Link href={href} target="_blank">
        <Icon
          icon={arquivo.src}
          name={name}
          isBackgroundDifferent={computer.isChangeBackground}
          onOpen={() => { }}
          onChangeBackground={computer.changeBackground}
        />
      </Link>
    </>
  );
};
