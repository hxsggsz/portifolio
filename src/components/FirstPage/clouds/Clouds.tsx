import { useEffect, useRef, useState } from "react";
import { CloudsStyled } from ".";
import bg from "../../../../public/cloud.png";
import { motion } from "framer-motion";
import Image from "next/image";

type CloudTypes = {
  text: string
}

export const Clouds = ({ text }: CloudTypes) => {
  return (
    <CloudsStyled>

      <motion.div animate={{ y: [20, -20, 20] }} transition={{ duration: 2, repeat: Infinity }} className="container">
        <div className="wrapper">
          <Image width={600} height={400} src={bg} alt="clouds" />
          <div className="content">
            <h1>{text}</h1>
          </div>
        </div>
      </motion.div>

    </CloudsStyled>
  )
}
