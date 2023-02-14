import { DiamondsFour } from "phosphor-react";
import { StyledHome } from ".";
import bg from "../../../../public/wallpaper.jpg";
import { motion } from "framer-motion";
import { Menu } from "../menu/menu";
import { useMobile } from "../../../hooks/useMobile";

type HomeType = {
  about: {
    id: string;
    text: string;
    image: string;
  }[];
  lang: {
    id: string;
    name: string;
    images: string;
  }[];
  cert: {
    id: string;
    name: string;
    images: string;
    description: string;
  }[];
  projects: {
    id: string
    name: string;
    images: string;
    description: string;
    icon: string;
    urlRepository: string;
    url: string;
    languages: string;
  }[]
}

export const Home = ({ about, lang, cert, projects }: HomeType) => {
  const mobile = useMobile()
  return (
    <StyledHome
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >

      <Menu about={about} lang={lang} cert={cert} projects={projects} isShowMenu={mobile.isShowMenu} onOpenMenu={mobile.handleMenu} />

      <div className="wrapper">
        <motion.button
          whileInView={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, type: "keyframes", duration: 3 }}
          onClick={mobile.handleMenu}
        >
          <DiamondsFour size={50} weight="bold" />
        </motion.button>

        <div className="background" />
      </div>
    </StyledHome>
  );
};
