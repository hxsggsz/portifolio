import Image from "next/image";
import { HeaderStyled } from ".";
import { HeaderTypes } from "./types";
import { motion } from "framer-motion";

export const Header = ({ text, image, altText }: HeaderTypes) => {
  return (
    <HeaderStyled>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
        <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
          <rect width="1440" height="560" x="0" y="0" fill="rgba(2, 13, 41, 1)"></rect>

          <path d="M1464 560L0 560 L0 442.86Q89.64 412.5, 120 502.15Q139.61 401.76, 240 421.37Q308.59 369.96, 360 438.54Q425.68 384.22, 480 449.89Q568.68 418.57, 600 507.25Q628.18 463.43, 672 491.61Q678.75 426.36, 744 433.1Q813.53 382.63, 864 452.16Q897.65 365.82, 984 399.47Q1031 374.47, 1056 421.47Q1115.3 408.77, 1128 468.08Q1149.51 417.59, 1200 439.1Q1216.95 384.06, 1272 401.01Q1338.7 347.71, 1392 414.41Q1455.68 406.1, 1464 469.78z" fill="white"></path>

          <path d="M1560 560L0 560 L0 569.03Q32.62 481.65, 120 514.27Q191.78 466.05, 240 537.82Q269.8 495.62, 312 525.42Q404.12 497.53, 432 589.65Q444.58 530.23, 504 542.81Q548.5 515.3, 576 559.8Q642.55 506.35, 696 572.9Q719.03 475.93, 816 498.97Q888.91 451.88, 936 524.79Q996.75 513.54, 1008 574.3Q1020.75 467.05, 1128 479.81Q1171.44 451.25, 1200 494.7Q1265.47 440.17, 1320 505.65Q1418.49 484.14, 1440 582.63Q1494.38 517.01, 1560 571.39z" fill="white"></path>
        </g>
        <defs>
          <mask id="SvgjsMask1000">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>

      <motion.h1 initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>{text}</motion.h1>

      <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <Image width={450} height={450} src={image} alt={altText} />
      </motion.div>
    </HeaderStyled>
  )
}