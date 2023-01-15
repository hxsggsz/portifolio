import Image from "next/image"
import { ContentTwoStyled } from "."
import { ContentsTypes } from "./types"
import { ButtonRedirect } from "../languages/ButtonRedirect"
import { motion } from "framer-motion"

export const ContentTwo = ({ text, image, altText }: ContentsTypes) => {
  return (
    <ContentTwoStyled>
      <div className='content-flex'>
        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }}>
          <Image width={450} height={450} src={image} alt={altText} />
        </motion.div>

        <motion.h1 initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }}>{text}</motion.h1>

      </div>
      <motion.button whileTap={{ y: 10 }}>Aqui!</motion.button>
    </ContentTwoStyled>
  )
}