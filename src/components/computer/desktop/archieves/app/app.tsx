import { StyledApp } from ".";
import { motion } from "framer-motion";
import { Cards } from "../cards/cards";
import { Minus, CornersOut, Square, X } from "phosphor-react";
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
    text: string;
    image: string;
  }[];
  isConfig?: boolean;
  config?: {
    title: string;
    titleLang: string;
    handleTheme: (color: string) => void;
    onHideEng?: () => void;
    onHidePt?: () => void;
    hrefEng?: string;
    hrefPt?: string;
  };
  lang?: {
    name: string;
    images: string;
  }[]
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
  lang
}: AppTypes) => {
  const { width } = useSizeScreen();
  return (
    <StyledApp isFullScreen={isFullScreen}>
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
              <button onClick={onMinus} className="button">
                <Minus size={20} />
              </button>

              <button onClick={onFullScreen} className="button">
                {isFullScreen ? <CornersOut size={20} /> : <Square size={20} />}
              </button>

              <button onClick={onClose} className="buttonClose">
                <X size={20} />
              </button>
            </div>
          </motion.div>

          {/* conteúdo do app */}
          <div className="content">
            {about?.map((abt) => (
              <>
                <Cards image={abt.image} text={abt.text} />
              </>
            ))}

            {lang?.map(lang => (
              <>
                <CardsLang name={lang.name} images={lang.images} />
              </>
            ))}

            {isConfig && (
              <>
                <h1>{config?.title}</h1>
                <div className="config-colors">
                  <div className="colors">
                    <motion.div
                      whileTap={{ scale: [1, 1.3, 0.9] }}
                      onClick={() => {
                        config?.handleTheme("purple");
                      }}
                      className="purple"
                    />
                    <motion.div
                      whileTap={{ scale: [1, 1.3, 0.9] }}
                      onClick={() => {
                        config?.handleTheme("blue");
                      }}
                      className="blue"
                    />
                    <motion.div
                      whileTap={{ scale: [1, 1.3, 0.9] }}
                      onClick={() => {
                        config?.handleTheme("green");
                      }}
                      className="green"
                    />
                    <motion.div
                      whileTap={{ scale: [1, 1.3, 0.9] }}
                      onClick={() => {
                        config?.handleTheme("red");
                      }}
                      className="red"
                    />
                    <motion.div
                      whileTap={{ scale: [1, 1.3, 0.9] }}
                      onClick={() => {
                        config?.handleTheme("pink");
                      }}
                      className="pink"
                    />
                    <motion.div
                      whileTap={{ scale: [1, 1.3, 0.9] }}
                      onClick={() => {
                        config?.handleTheme("grey");
                      }}
                      className="grey"
                    />
                    <motion.div
                      whileTap={{ scale: [1, 1.3, 0.9] }}
                      onClick={() => {
                        config?.handleTheme("yellow");
                      }}
                      className="yellow"
                    />
                  </div>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h1>{config?.titleLang}</h1>

                  <div className="languages">
                    <Link href={config?.hrefEng ? config.hrefEng : ''}>
                      <motion.div
                        whileTap={{ y: [0, 10, -10, 0], opacity: 0.4 }}
                        className="options"
                        onClick={config?.onHideEng}
                      >
                        <h1>English</h1>
                      </motion.div>
                    </Link>

                    <Link href={config?.hrefPt ? config.hrefPt : ''}>
                      <motion.div
                        whileTap={{ y: [0, 10, -10, 0], opacity: 0.4 }}
                        className="options"
                        onClick={config?.onHidePt}
                      >
                        <h1>Português</h1>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )
      }
    </StyledApp >
  );
};
