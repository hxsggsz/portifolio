import { LandingAboutStyled } from "."
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import React from 'react'

type AboutType = {
  title: string
  about: {
    id: string
    text: string
    image: string
  }[],
}

export const About = ({ title, about }: AboutType) => {
  const [width, setWidth] = useState<number>(19)
  const carousel = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])
  
  return (
    <>
      <LandingAboutStyled id='about'>
        <h1>{title}</h1>
        {/* responsável pelo efeito de slide */}
        <motion.div className="ref" ref={carousel} whileTap={{ cursor: 'grabbing' }}>
          <motion.div className='wrapper' drag='x' dragConstraints={{ right: 0, left: -width }}>
            {/* conteúdo da página */}
            {about.map(abt => (
              <motion.div whileHover={{ scale: 1.1 }} className="content" key={abt.id}>
                <Image width={300} height={200} src={abt.image} alt="imagens da minha apresentação" />
                <p>{abt.text}</p>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </LandingAboutStyled>
    </>
  )
} 