import { DiamondsFour } from "phosphor-react";
import { StyledHome } from ".";
import bg from "../../../../public/wallpaper.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu } from "../menu/menu";

type HomeType = {
  about: {
    id: string;
    text: string;
    image: string;
  }[];
}

export const Home = ({about}: HomeType) => {
  const [isShowMenu, setIsShowMenu] = useState(true);
  return (
    <StyledHome
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Menu about={about} isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />

      <div className="wrapper">
        <motion.button
          whileInView={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, type: "keyframes", duration: 3 }}
          onClick={() => setIsShowMenu(true)}
        >
          <DiamondsFour size={50} weight="bold" />
        </motion.button>

        <div className="background" />
      </div>
    </StyledHome>
  );
};
