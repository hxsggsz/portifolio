import { motion } from "framer-motion";
import { StyledConfig } from ".";
import { useThemes } from "../../../../../context/themeContext";
import { Archieve } from "../../../../archieve";
import Link from "next/link";
import { MutableRefObject } from "react";

export const Configs = (props: { appRef: MutableRefObject<HTMLDivElement | null> }) => {
  const { handleTheme } = useThemes();
  const colors = ["purple", "blue", "green", "red", "pink", "grey", "yellow"]

  return (
    <StyledConfig>
      <Archieve
        icon="/gear.png"
        name="configurações"
        appRef={props.appRef}
      >
        <div className="config-colors">
          <h1>Escolha a sua cor favorita!</h1>
          <div className="colors">
            {colors.map((color, idx) => (
              <motion.div
                key={idx}
                className={color}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => handleTheme(color)}
              />
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div className="chooseLanguages">
            <h1>Escolha a sua linguagem!</h1>

            <div className="buttons">
              <Link href="/en/desktop">
                <motion.button
                  whileHover={{ y: -10 }}
                  whileTap={{ y: [0, 10, -10, 0], opacity: 0.4 }}
                  className="options"
                >
                  <h1>English</h1>
                </motion.button>
              </Link>

              <Link href="/desktop">
                <motion.button
                  whileHover={{ y: -10 }}
                  whileTap={{ y: [0, 10, -10, 0], opacity: 0.4 }}
                  className="options"
                >
                  <h1>Português</h1>
                </motion.button>
              </Link>
            </div>

          </div>
        </div>
      </Archieve>
    </StyledConfig>
  );
};
