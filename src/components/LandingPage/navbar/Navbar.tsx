import { motion } from "framer-motion";
import Link from "next/link"
import { useState } from "react";
import { NavStyles } from ".";
import { Code, List, X } from "phosphor-react";

type NavbarTypes = {
  options: { content: string; url: string; }[]
}


export const Navbar = ({ options }: NavbarTypes) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <NavStyles show={showMenu}>

      <div className="mobile-menu">
        <Code className="icon" size={40} />

        <motion.div whileTap={{ rotate: 360 }} transition={{ type: "spring" }} className="button" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <X color='white' size={30} /> : <List color='white' size={30} />}
        </motion.div>

      </div>

      <motion.ul >

        {options.map((nav, idx) => {
          const isActive = idx === activeIdx;
          return (
            <motion.li onHoverStart={() => setActiveIdx(idx)} key={idx} >
              <Link href={nav.url}>

                {isActive ? (
                  <motion.span layoutId="background" className="background" />
                ) : null}

                <span onClick={() => setActiveIdx(idx)} >{nav.content}</span>

              </Link>
            </motion.li>
          )
        })}

      </motion.ul>

    </NavStyles>
  )
}