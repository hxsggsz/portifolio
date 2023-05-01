import Link from "next/link";
import Image from "next/image";
import { StyledLockScreen } from ".";
import { motion } from "framer-motion";
import { Fingerprint } from "phosphor-react";
import { CalendarEn } from "./calendar/calendarEn";
import { useMobile } from "../../../hooks/useMobile";

export const LoockScreenEn = () => {
  const mobile = useMobile()
  return (
    <StyledLockScreen isLocked={mobile.isLocked}>

      <div>

        <div className="calendar">
          <CalendarEn />
        </div>
        <div>

          <Link href="https://www.linkedin.com/in/hxsggsz/" target="_blank">
            <motion.div whileHover={{ y: 10 }} className="notification">
              <Image width={70} height={70} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="icone do linkedin" />

              <h3>Victor Hugo want to make a connection with you!</h3>
            </motion.div>
          </Link>
        </div>

        <motion.div onClick={mobile.handleIsLocked} className="fingerPrint">
          <h3>Press to unlock the phone</h3>
          <Fingerprint size={96} weight="bold" />
        </motion.div>
      </div>
    </StyledLockScreen>
  );
};
