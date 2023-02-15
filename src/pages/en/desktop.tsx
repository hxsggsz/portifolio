import Head from "next/head";
import { useRouter } from "next/router";
import bg from "../../../public/wallpaper.jpg"
import useSizeScreen from "../../hooks/useSizeScreen";
import { StyledDesktop } from "../../components/computer/desktop";
import { Taskbar } from "../../components/computer/taskbar/taskbar";
import { About } from "../../components/computer/desktop/archieves/about/About";
import { Project } from "../../components/computer/desktop/archieves/projects/project";
import { ConfigsEn } from "../../components/computer/desktop/archieves/config/configEn";
import { Github } from "../../components/computer/desktop/archieves/icon/contact/github";
import { Languages } from "../../components/computer/desktop/archieves/Languages/Languages";
import { Linkedin } from "../../components/computer/desktop/archieves/icon/contact/linkedin";
import { Certificates } from "../../components/computer/desktop/archieves/certificates/certificates";
import { Curriculo } from "../../components/computer/desktop/archieves/curriculo/curriculo";
import { usePortifolio } from "../../hooks/usePortifolio";
import { Loading } from "../../components/computer/loading/loading";
import { useTaskBar } from "../../context/taskBarContext";

export default function Login() {
  const router = useRouter();
  const { width } = useSizeScreen()
  const { taskBar } = useTaskBar()
  const { data } = usePortifolio('/portifolio-en')

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


      {data ? (
        <>
          <div className="icons">
            <ConfigsEn />
            <About name="AboutMe.txt" about={data.about} />
            <Languages name="Languages" lang={data.language} />
            <Certificates cert={data.certificate} name={"My certificates"} />
            <Linkedin />
            <Github />
          </div>

          <div className="icons2">
            {data.project.map(proj => (
              <Project key={proj.id} projects={proj} />
            ))}
          </div>

          <div>
            <Curriculo name="Curriculum" href="https://drive.google.com/file/d/1mVWFgxG6wB6Ahwna3Y4qZauwLH1t3d0d/view" />
          </div>
        </>
      ) : <Loading />}
      <Taskbar taskBar={taskBar} />
    </StyledDesktop>
  );
}