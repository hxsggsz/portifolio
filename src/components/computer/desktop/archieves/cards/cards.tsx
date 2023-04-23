import Image from "next/image";
import { StyledButton, StyledImage, StyledText, StyledWrapper } from ".";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "phosphor-react";
import { StyledButtonWrapper } from './index';

type CardType = {
  icon?: string
  images: string;
  text?: string;
  description?: string;
  isProject?: boolean;
  repo?: string;
  url?: string;
  langs?: string;
};

export const Cards = ({ icon, images, text, description, isProject, repo, url, langs }: CardType) => (
  <StyledWrapper isProject={isProject}>
    <StyledImage isProject={isProject}>
      <Image
        alt="cards"
        width={200}
        height={200}
        src={isProject ? icon! : images} />
    </StyledImage>

    <StyledText>
      {isProject ? <h1>{text}</h1> : <h3>{text}</h3>}

      {isProject ? <h2>{description}</h2> : <p>{description}</p>}


      {isProject && (
        <>
          <Image width={400} height={200} src={images} alt="cards" />
          <h3><Terminal size={25} weight="bold" /> {langs}</h3>

          <StyledButtonWrapper>

            <Link target="_blank" href={url ? url : ""}>
              <StyledButton
                whileHover={{ y: -5 }}
                whileTap={{ y: [0, 5, -5, 0], opacity: 0.4 }}
              >
                Website
              </StyledButton>
            </Link>

            <Link target="_blank" href={repo ? repo : ""}>
              <StyledButton
                whileHover={{ y: -5 }}
                whileTap={{ y: [0, 5, -5, 0], opacity: 0.4 }}
              >
                Github
              </StyledButton>
            </Link>
          </StyledButtonWrapper>
        </>
      )}
    </StyledText>
  </StyledWrapper>
);
