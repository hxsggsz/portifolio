import { useEffect, useRef, useState } from "react"
import { CloudsStyled } from "."
import bg from '../../../../public/cloud.png'
import { motion } from "framer-motion"

type CloudTypes = {
  clouds: {
    id: string,
    text: string
  }[]
  title?: string
}

export const Clouds = ({ clouds, title }: CloudTypes) => {
  const [width, setwidth] = useState(0)
  const slider = useRef<HTMLDivElement>(null)
  console.log(width)

  useEffect(() => {
    if (slider.current) {
      setwidth(slider.current.scrollWidth - slider.current.offsetWidth)
    }
  }, [])
  return (
    <CloudsStyled>

      <h1 className="title">{title}</h1>
      <motion.div ref={slider} >
        <motion.div layoutId="slider" whileTap={{ cursor: "grabbing" }} layoutScroll={true} className='container' drag='x' dragConstraints={{ right: 0, left: -width }} >
          {clouds.map(item => (
            <div key={item.id} style={{
              background: `url(${bg.src}) 
              no-repeat center center`,
            }} className="div-cloud"  >
              <h1>{item.text}</h1>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </CloudsStyled>
  )
}
