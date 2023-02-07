import Head from "next/head";
import { api } from "../api/axios";
import { ApiTypes } from "../api/types";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
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
import { useState } from "react";

export default function Login({ portifolio }: ApiTypes) {
  const router = useRouter();
  const { width } = useSizeScreen()
  const [isLoaded, setIsLoaded] = useState(false)

  if (width <= 600) {
    router.replace("/mobile")
  }
  if (width > 600) {
    setTimeout(() => setIsLoaded(true), 2500)
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


      {isLoaded ? (
        <>
          <div className="icons">
            <ConfigsEn />
            <About name="AboutMe.txt" about={portifolio.about} />
            <Languages name="Languages" lang={portifolio.language} />
            <Certificates cert={portifolio.certificate} name={"My certificates"} />
            <Linkedin />
            <Github />
          </div>

          <div className="icons2">
            {portifolio.project.map(proj => (
              <Project key={proj.id} projects={proj} />
            ))}
          </div>

          <div>
            <Curriculo name="Curriculum" href="https://drive.google.com/file/d/1mVWFgxG6wB6Ahwna3Y4qZauwLH1t3d0d/view" />
          </div>
        </>
      ) : <div style={{ width: "100vw", height: "100vh" }} />}
      <Taskbar />
    </StyledDesktop>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/portifolio-en");
  return {
    props: {
      portifolio: response.data,
    },
  };
};
