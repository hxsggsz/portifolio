import { LandingAboutStyled } from "."
import Image from "next/image"
import image from '../../../../public/static-dynamic.png'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import React from 'react'

type AboutType = {
  about: {
    id: string
    text: string
  }[],
}

export const About = ({ about }: AboutType) => {
  const [width, setWidth] = useState<number>(19)
  const carousel = React.useRef<HTMLDivElement>(null)
  console.log(width)
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])
  return (
    <LandingAboutStyled>
      <h1>Sobre mim!</h1>
      {/* alguma div ou alguma propiedade css ta dando ruim com o slider, descobrir o que é */}
      <div>
        <Image width={500} height={400} src={image} alt='pessoa numa mesa pensando' />

        <motion.div ref={carousel} >
          <motion.div style={{ border: '1px solid red' }} className='wrapper' drag='x' dragConstraints={{ right: 0, left: -width }}>
            {about.map(abt => (
              <div className="content" key={abt.id}>
                <p>{abt.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </LandingAboutStyled>
  )
} 