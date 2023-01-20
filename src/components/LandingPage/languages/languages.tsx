import { StyledLanguages } from './index';
import Image from 'next/image';
import cloud from '../../../../public/cloud.png'
import { motion } from 'framer-motion';

type LanguagesTypes = {
   languages: {
      id: string
      images: string
      name: string
   }[]
}

export const Languages = ({languages}: LanguagesTypes) => {
   return (
      <>
         <StyledLanguages>
         <h1>Algumas linguagens e Frameworks que eu utilizo</h1>
         {/* todo para amanhã: 
         colocar aquele efeito de whileinview que eu vi aqui https://www.youtube.com/watch?v=u_95SPKE6vg
         criar os testes desse componente */}
         <div  className='container'>
         {languages.map((lang, idx) => (
            <motion.div
               key={lang.id}
               initial={{ opacity: 0, translateX: -50, translateY: -50 }}
               whileInView={{opacity: 1, translateX: 0, translateY: 0}}
               transition={{ duration: 0.4, delay: idx * 0.2}}
               viewport={{once: true, }}
               className='card'
                >
               <Image width={150} height={100} src={lang.images} alt={`icone do ${lang.name}`} />
               <h1 className='text'>{lang.name}</h1>
            </motion.div>
         ))}
         </div>
      </StyledLanguages>
      </>
   )
}