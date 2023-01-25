import { ContentStyled } from ".";
import { ContentsTypes } from "./types";
import { Background } from "./Background";
import { Clouds } from "./clouds/Clouds";

export const ContentOne = ({ text }: ContentsTypes) => {
  return (
    <ContentStyled>
      <Background />
      <Clouds text={text} />
    </ContentStyled>
  )
}