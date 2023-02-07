import { X } from "phosphor-react";
import { StyledMenu } from ".";
import { Dispatch, SetStateAction } from "react";
import { Config } from "./config/config";
import { About } from "./about/about";
import { Languages } from "./languages/languages";
import { Certificates } from "./certificates/certificates";
import { Projects } from "./projects/projects";

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
    id: string
    name: string;
    images: string;
    description: string;
    icon: string;
    urlRepository: string;
    url: string;
    languages: string;
  }[]
};

export const Menu = ({
  isShowMenu,
  onOpenMenu,
  about,
  lang,
  cert,
  projects
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
        <Config name="Configurações" />
        <About name="SobreMim.txt" about={about} />
        <Languages name="Linguagens" lang={lang} />
        <Certificates name={"Certificados"} cert={cert} />
        {projects.map(prj => (
          <Projects key={prj.id} projects={prj} />
        ))}
      </div>
    </StyledMenu>
  );
};
