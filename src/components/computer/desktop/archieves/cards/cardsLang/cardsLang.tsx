import Image from "next/image";
import { StyledCardLang } from ".";

type CardLangTypes = {
  name: string;
  images: string;
};

export const CardsLang = ({ name, images }: CardLangTypes) => {
  return (
    <StyledCardLang>
      <Image width={170} height={80} src={images} alt={`icone do ${name}`} />
      <h1>{name}</h1>
    </StyledCardLang>
  );
};
