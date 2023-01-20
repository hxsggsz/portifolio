import { motion } from "framer-motion";
import Link from "next/link"
import { useState } from "react";
import { NavStyles } from ".";
import { Code, List, X } from "phosphor-react";
import { IParallax } from "@react-spring/parallax";
import { MutableRefObject } from "react";

type NavbarTypes = {
  options: { content: string; url: void; }[]
}


export const Navbar = ({ options }: NavbarTypes) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [isShowMenu, setisShowMenu] = useState(false)
  const [isActiveItem, setIsActiveItem] = useState(false)
  return (
    <NavStyles show={isShowMenu}>
{/* fazer isso funcionar https://www.youtube.com/watch?v=QzW03hyw_bU&t=405s */}
      <div className="mobile-menu">
        <Code className="icon" size={40} />

        <motion.div whileTap={{ rotate: 360 }} transition={{ type: "spring" }} className="button" onClick={() => setisShowMenu(!isShowMenu)}>
          {isShowMenu ? <X color='white' size={30} /> : <List color='white' size={30} />}
        </motion.div>

      </div>

      <motion.ul onHoverEnd={() => !isActiveItem && setActiveIdx(null)} >

        {options.map((nav, idx) => {
          const isActive = idx === activeIdx;
          return (
            <motion.li onHoverStart={() => setActiveIdx(idx)} onClick={() => {
              setisShowMenu(false)
              nav.url
            }} key={idx} >

              {isActive ? (
                <motion.span layoutId="background" className="background" />
              ) : null}

              <span onClick={() => {
                setActiveIdx(idx)
                setIsActiveItem(true)
              }} >{nav.content}</span>

            </motion.li>
          )
        })}

      </motion.ul>

    </NavStyles>
  )
}

