import Head from "next/head";
import { Taskbar } from "../../../components/computer/taskbar/taskbar";
import { StyledDesktop } from "../../../components/computer/desktop";
import bg from "../../../../public/wallpaper.jpg";
import { GetServerSideProps } from "next";
import { api } from "../../api/axios";
import { ApiTypes } from "../../api/types";
import { ConfigColors } from "../../../components/computer/desktop/archieves/config/config";
import { About } from "../../../components/computer/desktop/archieves/about/About";
import { Languages } from "../../../components/computer/desktop/archieves/Languages/Languages";
import { Certificates } from "../../../components/computer/desktop/archieves/certificates/certificates";
import { Icon } from "../../../components/computer/desktop/archieves/icon/icon";
import { useComputer } from "../../../hooks/useComputer";
import { useRouter } from "next/router";
import get from "../../../../public/get.png";
import { Linkedin } from "../../../components/computer/desktop/archieves/icon/contact/linkedin";
import { Github } from "../../../components/computer/desktop/archieves/icon/contact/github";
import useSizeScreen from "../../../hooks/useSizeScreen";
import { Project } from "../../../components/computer/desktop/archieves/projects/project";

export default function Login({ portifolio }: ApiTypes) {
   const computer = useComputer();
   const router = useRouter();
   const { width } = useSizeScreen()

   if (width <= 600) {
      console.log("menor que 600 px", width)
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

         <div className="icons">
            <ConfigColors />
            <About name="SobreMim.txt" about={portifolio.about} />
            <Languages name="Linguagens" lang={portifolio.language} />
            <Certificates cert={portifolio.certificate} />
            <Linkedin />
            <Github />
         </div>

         <div className="icons2">
            {portifolio.project.map(proj => (
               <Project key={proj.id} projects={proj} />
            ))}
         </div>

         <Icon
            icon={get.src}
            name="Get( )"
            isBackgroundDifferent={computer.isChangeBackground}
            onOpen={() => router.replace("/ptbr/get/")}
            onChangeBackground={computer.changeBackground}
         />
         <Taskbar />
      </StyledDesktop>
   );
}

export const getServerSideProps: GetServerSideProps = async () => {
   const response = await api.get("/portifolio");
   return {
      props: {
         portifolio: response.data,
      },
   };
};
