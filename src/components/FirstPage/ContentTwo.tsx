import Image from "next/image";
import { ContentTwoStyled } from ".";
import { motion } from "framer-motion";
import { ContentsTypes } from "./types";
import { Clouds } from "./clouds/Clouds";
import bird from "../../../public/bluebird-bird.gif";

export const ContentTwo = ({ text }: ContentsTypes) => {
  return (
    <ContentTwoStyled>
      <Clouds text={text} />
      <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity }} className="bird">
        <Image width={150} height={120} src={bird} alt="um passaro azul negando com a cabeça" />
      </motion.div>
    </ContentTwoStyled>
  )
}