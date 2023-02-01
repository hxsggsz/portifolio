import Image from "next/image"
import { StyledCards } from "."

type CardType = {
  image: string;
  text: string;
  description?: string;
}

export const Cards = ({ image, text, description }: CardType) => {
  return (
    <StyledCards>
      <div>
        <div className="image">
          <Image width={200} height={200} src={image} alt="cards" />
        </div>

        <div className="text">
          <h3>{text}</h3>
          <p>{description}</p>
        </div>

      </div>
    </StyledCards>
  )
}