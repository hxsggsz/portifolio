import Head from "next/head";
import { useRouter } from "next/router";
import bg from "../../public/wallpaper.jpg";
import useSizeScreen from "../hooks/useSizeScreen";
import { useTaskBar } from "../context/taskBarContext";
import { usePortifolio } from "../hooks/usePortifolio";
import { StyledDesktop } from "../components/computer/desktop";
import { Taskbar } from "../components/computer/taskbar/taskbar";
import { Loading } from "../components/computer/loading/loading";
import { About } from "../components/computer/desktop/archieves/about/About";
import { Configs } from "../components/computer/desktop/archieves/config/config";
import { Project } from "../components/computer/desktop/archieves/projects/project";
import { Github } from "../components/computer/desktop/archieves/icon/contact/github";
import { Languages } from "../components/computer/desktop/archieves/Languages/Languages";
import { Linkedin } from "../components/computer/desktop/archieves/icon/contact/linkedin";
import { Certificates } from "../components/computer/desktop/archieves/certificates/certificates";
import { Curriculo } from "../components/computer/desktop/archieves/curriculo/curriculo";

export default function Login() {
   const router = useRouter();
   const { width } = useSizeScreen()
   const { taskBar } = useTaskBar()
   const { data: port } = usePortifolio("/api/portifolio")

   if (width <= 600) {
      router.replace("/mobile")
   }

   return (
      <StyledDesktop
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
                  <About name="SobreMim.txt" about={port.about} />
                  <Languages name="Linguagens" lang={port.language} />
                  <Certificates cert={port.certificate} name={"Meus Certificados"} />
                  <Linkedin />
                  <Github />
               </div>

               <div className="icons2">
                  {port.project.map(proj => (
                     <Project key={proj.id} projects={proj} />
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