import { X } from "phosphor-react";
import { StyledApp } from ".";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cards } from "../../../computer/desktop/archieves/cards/cards";
import { once } from "events";

type AppTypes = {
  isAppOpen: boolean;
  onAppOpen: () => void;
  about?: {
    id: string;
    text: string;
    image: string;
  }[];
  isConfig?: boolean;
  config?: {
    title: string;
    titleLang: string;
    handleTheme: (color: string) => void;
    isDisabledEng: boolean;
    isDisabledPt: boolean;
    hrefEng?: string;
    hrefPt?: string;
  };
  lang?: {
    id: string;
    name: string;
    images: string;
  }[];
  cert?: {
    id: string;
    name: string;
    images: string;
    description: string;
  }[];
  isProject?: boolean;
  project?: {
    id: string;
    icon: string;
    images: string;
    name: string;
    description: string;
    urlRepository: string;
    url: string;
    languages: string;
  };
};

export const App = ({
  isAppOpen,
  onAppOpen,
  about,
  isConfig,
  config,
  lang,
  cert,
  isProject,
  project,
}: AppTypes) => {
  return (
    <StyledApp isAppOpen={isAppOpen}>
      <div className="closeMenu">
        <X
          onClick={onAppOpen}
          style={{ cursor: "pointer" }}
          size={35}
          color={"white"}
        />
      </div>

      {isConfig && (
        <>
          <div className="config-colors">
            <h1>{config?.title}</h1>
            <div className="colors">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => {
                  config?.handleTheme("purple");
                }}
                className="purple"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => {
                  config?.handleTheme("blue");
                }}
                className="blue"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => {
                  config?.handleTheme("green");
                }}
                className="green"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => {
                  config?.handleTheme("red");
                }}
                className="red"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => {
                  config?.handleTheme("pink");
                }}
                className="pink"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => {
                  config?.handleTheme("grey");
                }}
                className="grey"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => {
                  config?.handleTheme("yellow");
                }}
                className="yellow"
              />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <div className="chooseLanguages">
              <h1>{config?.titleLang}</h1>
              <div className="buttons">
                <Link href={config?.hrefEng ? config.hrefEng : ""}>
                  <motion.button
                    whileHover={{ y: -10 }}
                    whileTap={{ y: [0, 10, -10, 0], opacity: 0.4 }}
                    className="options"
                    disabled={config?.isDisabledEng}
                  >
                    <h1>English</h1>
                  </motion.button>
                </Link>

                <Link href={config?.hrefPt ? config.hrefPt : ""}>
                  <motion.button
                    whileHover={{ y: -10 }}
                    whileTap={{ y: [0, 10, -10, 0], opacity: 0.4 }}
                    className="options"
                    disabled={config?.isDisabledPt}
                  >
                    <h1>Português</h1>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {about?.map((abt) => (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          key={abt.id}
          className="about"
        >
          <Image
            width={300}
            height={300}
            src={abt.image}
            alt="imagem de ilustração"
          />
          <h2>{abt.text}</h2>
        </motion.div>
      ))}

      {lang?.map((lang) => (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="langs"
          key={lang.id}
        >
          <Image
            width={100}
            height={100}
            src={lang.images}
            alt={`icone do ${lang.name}`}
          />
          <h1>{lang.name}</h1>
        </motion.div>
      ))}

      {cert?.map((cert) => (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="cert"
          key={cert.id}
        >
          <Cards
            images={cert.images}
            text={cert.name}
            description={cert.description}
            icon={""}
          />
        </motion.div>
      ))}

      {isProject && (
        <div className="projects">
          <Cards
            isProject={isProject}
            url={project?.url}
            repo={project?.urlRepository}
            images={project?.images ? project.images : ""}
            text={project?.name}
            description={project?.description}
            langs={project?.languages}
            icon={project ? project.icon : ""}
          />
        </div>
      )}
    </StyledApp>
  );
};
