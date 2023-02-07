import Link from "next/link";
import Image from "next/image";
import { StyledLockScreen } from ".";
import { Calendar } from "./calendar/calendar";
import { motion } from "framer-motion";
import { Fingerprint } from "phosphor-react";
import { useState } from "react";
import { useMobile } from "../../../hooks/useMobile";

export const LoockScreen = () => {
  const mobile = useMobile()
  return (
    <StyledLockScreen isLocked={mobile.isLocked}>

      <div>

        <div className="calendar">
          <Calendar />
        </div>

        <div>

          <Link href="https://www.linkedin.com/in/hxsggsz/" target="_blank">
            <motion.div whileHover={{ y: 10 }} className="notification">
              <Image width={70} height={70} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="icone do linkedin" />

              <h3>Victor Hugo quer fazer conexão com você!</h3>
            </motion.div>
          </Link>
        </div>

        <motion.div onHoverStart={mobile.handleIsLocked} className="fingerPrint">
          <h3>Aperte e segure no leitor de digital</h3>
          <Fingerprint size={96} weight="bold" />
        </motion.div>
      </div>
    </StyledLockScreen>
  );
};
