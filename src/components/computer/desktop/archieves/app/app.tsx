import { StyledApp } from ".";
import { motion } from "framer-motion";
import { Cards } from "../cards/cards";
import { Minus, CornersOut, Square, X, Browsers, Browser } from "phosphor-react";
import useSizeScreen from "../../../../../hooks/useSizeScreen";
import Link from "next/link";
import { CardsLang } from "../cards/cardsLang/cardsLang";

type AppTypes = {
  isShow: boolean;
  isFullScreen: boolean;
  onMinus: () => void;
  onFullScreen: () => void;
  onClose: () => void;
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
  isShow,
  isFullScreen,
  onMinus,
  onFullScreen,
  onClose,
  about,
  isConfig,
  config,
  lang,
  cert,
  isProject,
  project,
}: AppTypes) => {
  const { width } = useSizeScreen();
  return (
    <StyledApp isProject={isProject ? isProject : false} isFullScreen={isFullScreen}>
      {isShow && (
        <motion.div
          drag
          dragConstraints={{
            left: -width,
            right: width,
            top: 0,
            bottom: 0,
          }}
          className="app"
        >
          <motion.div className="menuBar">
            <div className="buttons">
              <button data-testid="minus" onClick={onMinus} className="button">
                <Minus size={20} />
              </button>

              <button data-testid="fullScreen" onClick={onFullScreen} className="button">
                {isFullScreen ? <Browsers size={20} /> : <Browser size={20} weight="bold" />}
              </button>

              <button data-testid="close" onClick={onClose} className="buttonClose">
                <X size={20} />
              </button>
            </div>
          </motion.div>

          {/* conteúdo do app */}
          <div className="content">
            {about?.map((abt) => (
              <Cards key={abt.id} images={abt.image} text={abt.text} icon={""} />
            ))}

            {lang?.map((lang) => (
              <CardsLang key={lang.id} name={lang.name} images={lang.images} />
            ))}

            {cert?.map((cert) => (
              <Cards
                key={cert.id}
                images={cert.images}
                text={cert.name}
                description={cert.description} icon={""} />
            ))}

          </div>

          {isProject &&
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
          }

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

              <div style={{ marginTop: "2rem" }}>
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
        </motion.div>
      )}
    </StyledApp>
  );
};
