import Image from "next/image"
import { StyledCards } from "."

type CardType = {
  image: string;
  text: string;
}

export const Cards = ({ image, text }: CardType) => {
  return (
    <StyledCards>
      <div>
        <div className="image">
          <Image width={200} height={200} src={image} alt="cards" />
        </div>

        <div className="text">
          <h2>{text}</h2>
        </div>

      </div>
    </StyledCards>
  )
}