import Link from "next/link";
import Image from "next/image";
import { StyledButton } from ".";
import { useState } from "react";
import { motion } from "framer-motion";
import { FilePdf, Plus, X } from "phosphor-react";
import * as Popover from "@radix-ui/react-popover";

type ButtonProps = {
   title: string;
   curriculo: string;

}

export const MenuButton = ({ title, curriculo }: ButtonProps) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <StyledButton>

         <Popover.Root>
            <Popover.Trigger onClick={() => setIsOpen(!isOpen)} className="button" >
               <motion.div whileTap={{ rotate: 360 }}>
                  {isOpen ? <X color="white" size={32} /> : <Plus color="white" size={32} />}
               </motion.div>

            </Popover.Trigger>

            <Popover.Content className="content">
               <h2>{title}</h2>

               <Link href={curriculo}><FilePdf size={32} /></Link>

               <div className="wrapper-icons">
                  <Link target="_blank" href="https://github.com/hxsggsz">
                     <motion.div whileHover={{ y: -4 }} whileTap={{ y: 0 }} className="icons">
                        <Image width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
                        <h3>github</h3>
                     </motion.div>
                  </Link>
                  <Link target="_blank" href="https://www.linkedin.com/in/hxsggsz/">
                     <motion.div whileHover={{ y: -4 }} whileTap={{ y: 0 }} className="icons">
                        <Image width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" />
                        <h3>linkedin</h3>
                     </motion.div>
                  </Link>
               </div>
            </Popover.Content>
         </Popover.Root>
      </StyledButton>
   )
}