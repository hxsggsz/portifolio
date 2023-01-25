import { StyledCard } from ".";
import Image from "next/image";
import { motion } from "framer-motion";

type CardTypes = {
   title: string,
   cert: {
      id: string;
      name: string;
      images: string;
      description: string;
   }[]
}

export const Certificates = ({ title, cert }: CardTypes) => {
   return (
      <StyledCard id="certificates">
         <h1>{title}</h1>
         <div className="container">
            {cert.map((items, idx) => (
               <motion.div
                  key={items.id}
                  initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  viewport={{ once: true, }}>
                  <motion.div whileHover={{ scale: 1.1 }} className="card">
                     <Image width={380} height={270} src={items.images} alt={`foto do projeto ${items.name}`} />

                     <div className="texts">
                        <h1>{items.name}</h1>
                        <p>{items.description}</p>
                     </div>

                  </motion.div>
               </motion.div>
            ))}
         </div>
      </StyledCard>
   )
}