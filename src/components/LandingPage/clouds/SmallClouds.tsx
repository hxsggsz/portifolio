import Image from "next/image";
import cloud from '../../../../public/cloud.png'
import { SmallCloudsStyled } from ".";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

type SmallCloudsTypes = {
  SmClouds: {
    id: string,
    name: string,
    images: string,
  }[]
}

export const SmallClouds = ({ SmClouds }: SmallCloudsTypes) => {
  const slider2 = useRef<HTMLDivElement>(null)
  //passar o state de cloud por context pra ca
  // ou criar o hook que pega o tamanho da tela pra usar aqui
  const [tamanho, setTamanho] = useState(0)
  console.log(tamanho)

  useEffect(() => {
    if (slider2.current) {
      setTamanho(slider2.current.offsetWidth - slider2.current.scrollWidth)
    }
  }, [])
  return (
    <SmallCloudsStyled>
      <div className="title">
        <h1>Algumas linguaguens e frameworks que eu uso</h1>
      </div>

      <motion.div ref={slider2}>
        <motion.div layoutId="teste" whileTap={{ cursor: "grabbing" }} layoutScroll={true} className='container' drag='x' dragConstraints={{ right: 0, left: -tamanho }}>
          {SmClouds.map(clouds => (
            <div className="wrapper" key={clouds.id}>
              <Image width={270} height={200} src={cloud} alt={'background clouds'} />

              <div className="content">
                <Image width={70} height={70} src={clouds.images} alt={'icons'} />
                <h1>{clouds.name}</h1>
              </div>

            </div>

          ))}
        </motion.div>
      </motion.div>

    </SmallCloudsStyled>
  )
}

// {SmClouds.map(clouds => (
//   <div key={clouds.id}>
//     <Image width={270} height={200} src={cloud} alt={'background clouds'} />

//     <div className="content">
//       <Image width={70} height={70} src={clouds.images} alt={'icons'} />
//       <h1>{clouds.name}</h1>
//     </div>

//   </div>
// ))}