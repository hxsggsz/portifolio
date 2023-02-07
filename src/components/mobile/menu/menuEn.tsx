import { X } from "phosphor-react";
import { StyledMenu } from ".";
import { Dispatch, SetStateAction } from "react";
import { About } from "./about/about";
import { Languages } from "./languages/languages";
import { Certificates } from "./certificates/certificates";
import { Projects } from "./projects/projects";
import { ConfigEn } from "./config/configEn";

type MenuTypes = {
  isShowMenu: boolean;
  onOpenMenu: () => void;
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
    id: string;
    name: string;
    images: string;
    description: string;
    icon: string;
    urlRepository: string;
    url: string;
    languages: string;
  }[];
};

export const MenuEn = ({
  isShowMenu,
  onOpenMenu,
  about,
  lang,
  cert,
  projects,
}: MenuTypes) => {
  return (
    <StyledMenu isShowMenu={isShowMenu}>
      <div className="closeMenu">
        <X
          onClick={onOpenMenu}
          style={{ cursor: "pointer" }}
          size={35}
          color={"white"}
        />
      </div>

      <div className="container">
        <ConfigEn name="Configuration" />
        <About name="AboutMe.txt" about={about} />
        <Languages name="Languages" lang={lang} />
        <Certificates name="Certificates" cert={cert} />
        {projects.map((prj) => (
          <Projects key={prj.id} projects={prj} />
        ))}
      </div>
    </StyledMenu>
  );
};
