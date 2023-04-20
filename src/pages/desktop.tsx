import Head from "next/head";
import { useRef } from "react";
import { useRouter } from "next/router";
import { Test } from "../components/test";
import bg from "../../public/wallpaper.jpg";
import useSizeScreen from "../hooks/useSizeScreen";
import { useTaskBar } from "../context/taskBarContext";
import { usePortifolio } from "../hooks/usePortifolio";
import { Taskbar } from "../components/computer/taskbar/taskbar";
import { Loading } from "../components/computer/loading/loading";
import { Cards } from "../components/computer/desktop/archieves/cards/cards";
import { Configs } from "../components/computer/desktop/archieves/config/config";
import { Github } from "../components/computer/desktop/archieves/icon/contact/github";
import { Linkedin } from "../components/computer/desktop/archieves/icon/contact/linkedin";
import { Curriculo } from "../components/computer/desktop/archieves/curriculo/curriculo";
import { StyledContent, StyledDesktop, StyledProjects } from "../components/computer/desktop";
import { CardsLang } from "../components/computer/desktop/archieves/cards/cardsLang/cardsLang";

export default function Login() {
   const router = useRouter();
   const { width } = useSizeScreen()
   const { taskBar } = useTaskBar()
   const { data: port } = usePortifolio("/api/portifolio")
   const appRef = useRef<HTMLDivElement | null>(null)

   if (width <= 768) {
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
            <title>Portifolio - Desktop</title>
         </Head>

         {port ? (
            <>
               <div className="icons">
                  <Configs />
                  <Test
                     icon="/arquivo.png"
                     name="sobre-mim.txt"
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
                  </Test>
                  <Test
                     icon="/arquivo.png"
                     name="linguagens.txt"
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
                  </Test>

                  <Test
                     icon="/pastas.png"
                     name="Certificados"
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
                  </Test>
                  <Linkedin />
                  <Github />

               </div>
               <div className="icons2">
                  {port.project.map(proj => (
                     <Test
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
                     </Test>
                  ))}
               </div>

               <div>
                  <Curriculo name="Currículo" href="https://drive.google.com/file/d/1quEej_QzrQgpRd1LxrPSdN53ObvJVMk2/view?usp=sharing" />
               </div>
            </>
         ) : <Loading />}
         <Taskbar taskBar={taskBar} />
      </StyledDesktop>
   );
}