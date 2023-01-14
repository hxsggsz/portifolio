import Image from "next/image"
import { ContentStyled } from "."
import { ContentsTypes } from "./types"

export const ContentOne = ({ text, image, altText }: ContentsTypes) => {
  return (
    <ContentStyled>
      <h1>{text}</h1>
      <Image width={450} height={450} src={image} alt={altText} />
    </ContentStyled>
  )
}