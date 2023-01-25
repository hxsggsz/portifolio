import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonTypes = {
  href: string,
  children: ReactNode
}

export const ButtonRedirect = ({ href, children }: ButtonTypes) => {
  return (
    <>
      <Link href={href}>
        <motion.button style={{ cursor: 'pointer' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: [0.9, 1] }}>
          {children}
        </motion.button>
      </Link>
    </>
  )
}
