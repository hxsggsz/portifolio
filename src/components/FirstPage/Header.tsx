import Image from "next/image"
import { HeaderStyled } from "."
import { ContentsTypes } from "./types"
import { Waves } from "./Waves"
import { motion } from "framer-motion"

export const Header = ({ text, image, altText }: ContentsTypes) => {
  return (
    <HeaderStyled>
      <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <Image width={450} height={450} src={image} alt={altText} />
      </motion.div>

      <motion.h1 initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>{text}</motion.h1>
      <Waves />
    </HeaderStyled >
  )
}