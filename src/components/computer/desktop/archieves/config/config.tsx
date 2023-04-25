import Link from "next/link";
import { StyledButton, StyledChooseLanguages, StyledColors, StyledConfig, StyledWrapperButtons } from '.';
import { motion } from "framer-motion";
import { MutableRefObject } from "react";
import { Archieve } from "../archieve/archieve";
import { useThemes } from "../../../../../context/themeContext";

export const Configs = (props: { appRef: MutableRefObject<HTMLDivElement | null> }) => {
  const { handleTheme } = useThemes();
  const colors = ["purple", "blue", "green", "red", "pink", "grey", "yellow"]

  return (
    <>
      <Archieve
        icon="/gear.png"
        name="configurações"
        appRef={props.appRef}
      >
        <StyledConfig>
          <h1>Escolha a sua cor favorita!</h1>
          <StyledColors>
            {colors.map((color, idx) => (
              <motion.div
                key={idx}
                className={color}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [1, 1.3, 0.9] }}
                onClick={() => handleTheme(color)}
              />
            ))}
          </StyledColors>
        </StyledConfig>

        <StyledChooseLanguages>
          <h1>Escolha a sua linguagem!</h1>

          <StyledWrapperButtons>
            <Link href="/en/desktop">
              <StyledButton
                whileHover={{ y: -5 }}
                whileTap={{ y: [0, 5, -5, 0], opacity: 0.4 }}
              >
                <h1>English</h1>
              </StyledButton>
            </Link>

            <Link href="/desktop">
              <StyledButton
                whileHover={{ y: -5 }}
                whileTap={{ y: [0, 5, -5, 0], opacity: 0.4 }}
              >
                <h1>Português</h1>
              </StyledButton>
            </Link>
          </StyledWrapperButtons>
        </StyledChooseLanguages>
      </Archieve>
    </>
  );
};
