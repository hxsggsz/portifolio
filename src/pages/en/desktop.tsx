import Head from "next/head";
import { useRef } from "react";
import { useRouter } from "next/router";
import bg from "../../../public/wallpaper.jpg"
import useSizeScreen from "../../hooks/useSizeScreen";
import { useTaskBar } from "../../context/taskBarContext";
import { usePortifolio } from "../../hooks/usePortifolio";
import { Loading } from "../../components/computer/loading/loading";
import { Taskbar } from "../../components/computer/taskbar/taskbar";
import { Cards } from "../../components/computer/desktop/archieves/cards/cards";
import { StyledDesktop, StyledContent, StyledProjects } from "../../styles/desktop";
import { Configs } from "../../components/computer/desktop/archieves/config/config";
import { Archieve } from "../../components/computer/desktop/archieves/archieve/archieve";
import { LinkIcon } from "../../components/computer/desktop/archieves/icon/contact/LinkIcon";
import { CardsLang } from "../../components/computer/desktop/archieves/cards/cardsLang/cardsLang";

export default function Login() {
  const router = useRouter();
  const { width } = useSizeScreen()
  const { taskBar } = useTaskBar()
  const { data: port } = usePortifolio('/api/portifolio-en')
  const appRef = useRef<HTMLDivElement | null>(null)

  if (width <= 600) {
    router.replace("/mobile")
  }

  return (
    <StyledDesktop
      ref={appRef}
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Head>
        <title>Portfolio - Desktop</title>
      </Head>


      {port ? (
        <>
          <div className="icons">
            <Configs appRef={appRef}/>
            <Archieve
              icon="/arquivo.png"
              name="about-me.txt"
              appRef={appRef}
            >
              <StyledContent>
                {port.about.map(lang => (
                  <Cards
                    key={lang.id}
                    text={lang.text}
                    images={lang.image}
                  />
                ))}
              </StyledContent>
            </Archieve>
            <Archieve
              icon="/arquivo.png"
              name="languages.txt"
              appRef={appRef}
            >
              <StyledContent>
                {port.language.map(lang => (
                  <CardsLang
                    key={lang.id}
                    name={lang.name}
                    images={lang.images}
                  />
                ))}
              </StyledContent>
            </Archieve>

            <Archieve
              icon="/pastas.png"
              name="certificates"
              appRef={appRef}
            >
              <StyledContent>
                {port.certificate.map(cert => (
                  <Cards
                    key={cert.id}
                    text={cert.name}
                    images={cert.images}
                    description={cert.description}
                  />
                ))}
              </StyledContent>
            </Archieve>
            <LinkIcon
              name="Linkedin"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              link="https://www.linkedin.com/in/hxsggsz/"
              appRef={appRef}
            />
            <LinkIcon
              name="Github"
              icon="/github.png"
              link="https://github.com/hxsggsz"
              appRef={appRef}
            />

          </div>
          <div className="icons2">
            {port.project.map(proj => (
              <Archieve
                key={proj.id}
                icon={proj.icon}
                name={proj.name}
                appRef={appRef}
              >
                <StyledProjects>
                  <Cards
                    url={proj.url}
                    isProject={true}
                    icon={proj.icon}
                    text={proj.name}
                    images={proj.images}
                    langs={proj.languages}
                    repo={proj.urlRepository}
                    description={proj.description}
                  />
                </StyledProjects>
              </Archieve>
            ))}
          </div>

          <div>
            <LinkIcon
              name="resume"
              icon="/arquivo.png"
              link="https://drive.google.com/file/d/1JWkQV8_lCKxQmGIMKdy1E6aLpjsxZDDi/view"
              appRef={appRef}
            />

          </div>
        </>
      ) : <Loading />}
      <Taskbar taskBar={taskBar} />
    </StyledDesktop>
  );
}