import Image from "next/image";
import { StyledCards } from ".";
import { motion } from "framer-motion";
import Link from "next/link";

type CardType = {
  icon: string
  images: string;
  text?: string;
  description?: string;
  isProject?: boolean;
  repo?: string;
  url?: string;
  langs?: string;
};

export const Cards = ({ icon, images, text, description, isProject, repo, url, langs }: CardType) => {
  return (
    <StyledCards isProject={isProject}>
      <div>
        <div className="image">
          <Image width={200} height={200} src={isProject ? icon : images} alt="cards" />
        </div>

        <div className="text">
          {isProject ? <h1>{text}</h1> : <h3>{text}</h3>}

          {isProject ? <h2>{description}</h2> : <p>{description}</p>}


          {isProject && (
            <>
              <Image width={400} height={200} src={images} alt="cards" />
              <h3>Linguagens utilizadas: {langs}</h3>

              <div className="buttonsCard">

                <Link target="_blank" href={url ? url : ""}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    whileTap={{ y: [0, 10, -10, 0], opacity: 0.4 }}
                    className="buttonCard"
                  >
                    Site
                  </motion.div>
                </Link>

                <Link target="_blank" href={repo ? repo : ""}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    whileTap={{ y: [0, 10, -10, 0], opacity: 0.4 }}
                    className="buttonCard"
                  >
                    Github
                  </motion.div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </StyledCards>
  );
};
