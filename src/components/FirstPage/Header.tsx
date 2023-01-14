import Image from "next/image"
import { HeaderStyled } from "."
import { ContentsTypes } from "./types"
import { motion } from "framer-motion"

export const Header = ({ text, image, altText }: ContentsTypes) => {
  return (
    <HeaderStyled>
      <Image width={450} height={450} src={image} alt={altText} />
      <h1>{text}</h1>
      <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <motion.path animate={{ scaleY: [1.1, 0.9], x: 100 }} transition={{ type: "keyframes", repeat: Infinity, repeatType: 'reverse', duration: 3.0 }} className="wave1" fill="#171738" fillOpacity="1" d="M0,288L30,288C60,288,120,288,180,256C240,224,300,160,360,154.7C420,149,480,203,540,197.3C600,192,660,128,720,90.7C780,53,840,43,900,64C960,85,1020,139,1080,138.7C1140,139,1200,85,1260,74.7C1320,64,1380,96,1410,112L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></motion.path>

        <motion.path animate={{ scaleY: [0.9, 1.1], x: 100 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3.0 }} className="wave2" fill="#3423A6" fillOpacity="1" d="M0,96L30,85.3C60,75,120,53,180,58.7C240,64,300,96,360,106.7C420,117,480,107,540,101.3C600,96,660,96,720,85.3C780,75,840,53,900,48C960,43,1020,53,1080,85.3C1140,117,1200,171,1260,170.7C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></motion.path>


        <motion.path animate={{ x: -100 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3.0 }} className="wave3" fill="#2E1760" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,149.3C384,171,480,213,576,197.3C672,181,768,107,864,117.3C960,128,1056,224,1152,256C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></motion.path>
      </svg>
    </HeaderStyled >
  )
}