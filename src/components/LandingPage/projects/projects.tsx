import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { StyledProjects } from "./index";

type ProjectsTypes = {
   title: string,
   projects: {
      id: string;
      name: string;
      images: string;
      languages: string;
      description: string;
      url: string;
      urlRepository: string;
   }[]
}

export const Projects = ({ title, projects }: ProjectsTypes) => {
   return (
      <StyledProjects id="projects">
         <h1>{title}</h1>

         <div className="container">
            {projects.map((items, idx) => (

               <motion.div
                  key={items.id}
                  initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  viewport={{ once: true, }}>
                  <motion.div whileHover={{ scale: 1.1 }} className="card">
                     <Image width={380} height={200} src={items.images} alt={`foto do projeto ${items.name}`} />

                     <div className="texts">

                        <h1>{items.name}</h1>
                        <h3>{items.languages}</h3>
                        <p>{items.description}</p>
                        <div className="buttons">
                           <motion.button whileHover={{ y: -4 }} whileTap={{ y: 0 }}>
                              <Link target="_blank" href={items.url}>Projeto</Link>
                           </motion.button>

                           <motion.button whileHover={{ y: -4 }} whileTap={{ y: 0 }}>
                              <Link target="_blank" href={items.urlRepository}>GitHub</Link>
                           </motion.button>

                        </div>

                     </div>

                  </motion.div>
               </motion.div>
            ))}
         </div>

      </StyledProjects>
   )
}