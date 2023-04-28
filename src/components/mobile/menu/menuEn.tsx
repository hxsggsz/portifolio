import { X } from "phosphor-react";
import { StyledMenu } from ".";
import arquivos from "../../../../public/arquivo.png"
import { About } from "./about/about";
import { Languages } from "./languages/languages";
import { Certificates } from "./certificates/certificates";
import { Projects } from "./projects/projects";
import { ConfigEn } from "./config/configEn";
import Link from "next/link";
import { Icon } from "./icons/icons";

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

        <Link href='https://drive.google.com/file/d/1cBJMbCF33tJwRdO0hlD6ftxNI1Rp1Jlg/view?usp=sharing' target="_blank">
          <Icon image={arquivos.src} name="resume" setIsAppOpen={() => { }} />
        </Link>
        <Link href='https://www.linkedin.com/in/hxsggsz/' target="_blank">
          <Icon image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"} name={"Linkedin"} setIsAppOpen={() => { }} />
        </Link>

        <Link href='https://github.com/hxsggsz?tab=repositories' target="_blank">
          <Icon image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} name={"Github"} setIsAppOpen={() => { }} />
        </Link>

        {projects.map((prj) => (
          <Projects key={prj.id} projects={prj} />
        ))}
      </div>
    </StyledMenu>
  );
};
