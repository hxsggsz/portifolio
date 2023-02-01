import Head from "next/head";
import { Taskbar } from "../../../components/computer/taskbar/taskbar";
import { StyledDesktop } from "../../../components/computer/desktop";
import bg from "../../../../public/wallpaper.jpg";
import { GetServerSideProps } from "next";
import { api } from "../../api/axios";
import { ApiTypes } from "../../api/types";
import { ConfigColors } from "../../../components/computer/desktop/archieves/config/config";
import { About } from "../../../components/computer/desktop/archieves/about/About";
import { CardsLang } from "../../../components/computer/desktop/archieves/cards/cardsLang/cardsLang";
import { Languages } from "../../../components/computer/desktop/archieves/Languages/Languages";

export default function Login({ portifolio }: ApiTypes) {
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
         <About about={portifolio.about} />
         <Languages lang={portifolio.language} />
         </div>
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
