import bg from '../../../public/cloud.png'
import { LandingpageStyle } from './Landingpage'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TETETETE = () => {
  const [width, setwidth] = useState(0)
  const slider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (slider.current) {
      setwidth(slider.current.scrollWidth - slider.current.offsetWidth)
    }
  }, [])
  return (
    <LandingpageStyle>
      <motion.div ref={slider}>
        <motion.div className='container' drag='x' dragConstraints={{ right: 0, left: -width }} >
          <div className="div-cloud" style={{
            background: `url(${bg.src}) 
      no-repeat center center`,
          }}>
            <h1>teste</h1>
          </div>

          <div className="div-cloud" style={{
            background: `url(${bg.src}) 
          no-repeat center center`,
          }}>
            <h1>teste</h1>
          </div>
        </motion.div>
      </motion.div>
    </LandingpageStyle >
  )
}