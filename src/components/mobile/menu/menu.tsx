import { X } from "phosphor-react";
import { StyledMenu } from ".";
import arquivos from "../../../../public/arquivo.png"
import { Config } from "./config/config";
import { About } from "./about/about";
import { Languages } from "./languages/languages";
import { Certificates } from "./certificates/certificates";
import { Projects } from "./projects/projects";
import { Icon } from "./icons/icons";
import Link from "next/link";

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

        <Link href='https://drive.google.com/file/d/1_fslTX23NEtBmZLDYVwdNIP5u1NZDzIN/view' target="_blank">
          <Icon image={arquivos.src} name={"currículo"} setIsAppOpen={() => { }} />
        </Link>
        <Link href='https://www.linkedin.com/in/hxsggsz/' target="_blank">
          <Icon image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"} name={"Linkedin"} setIsAppOpen={() => { }} />
        </Link>

        <Link href='https://github.com/hxsggsz?tab=repositories' target="_blank">
          <Icon image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} name={"Github"} setIsAppOpen={() => { }} />
        </Link>

        {projects.map(prj => (
          <Projects key={prj.id} projects={prj} />
        ))}
      </div>
    </StyledMenu>
  );
};
