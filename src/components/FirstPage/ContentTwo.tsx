import Image from "next/image"
import { ContentTwoStyled } from "."
import { ContentsTypes } from "./types"
import { ButtonRedirect } from "../languages/ButtonRedirect"

export const ContentTwo = ({ text, image, altText }: ContentsTypes) => {
  return (
    <ContentTwoStyled>
      <div>
        <Image width={450} height={450} src={image} alt={altText} />
        <h1>{text}</h1>
      </div>
      <ButtonRedirect href='a'>Aqui!</ButtonRedirect>
    </ContentTwoStyled>
  )
}