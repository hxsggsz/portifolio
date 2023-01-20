import Image from "next/image";
import { StyledEndPage } from ".";
import Link from "next/link";
import { motion } from "framer-motion";

export const EndPage = () => (
   <StyledEndPage>
      <div>
         <h1>Entre em contato comigo!</h1>
         <div className="wrapper-icons">
            <Link target='_blank' href='https://github.com/hxsggsz'>
               <motion.div whileHover={{ y: -4 }} whileTap={{ y: 0 }} className="icons">
                  <Image width={38} height={38} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt='github' />
                  <h1>github</h1>
               </motion.div>
            </Link>
            <Link target='_blank' href='https://www.linkedin.com/in/hxsggsz/'>
               <motion.div whileHover={{ y: -4 }} whileTap={{ y: 0 }} className="icons">
                  <Image width={38} height={38} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' alt='linkedin' />
                  <h1>linkedin</h1>
               </motion.div>
            </Link>
         </div>
      </div>
   </StyledEndPage>
)