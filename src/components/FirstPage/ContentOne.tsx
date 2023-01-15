import Image from "next/image"
import { ContentStyled } from "."
import { ContentsTypes } from "./types"
import { motion } from "framer-motion"

export const ContentOne = ({ text, image, altText }: ContentsTypes) => {
  return (
    <ContentStyled>
      <motion.h1 initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }}>{text}</motion.h1>

      <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }}>
        <Image width={450} height={450} src={image} alt={altText} />
      </motion.div>
    </ContentStyled>
  )
}