import Head from "next/head";
import { Taskbar } from "../../../components/computer/taskbar/taskbar";
import { StyledDesktop } from "../../../components/computer/desktop";
import bg from "../../../../public/wallpaper.jpg";
import arquivo from "../../../../public/arquivo.png";
import { Archieves } from "../../../components/computer/desktop/archieves/Archieves";
import { GetServerSideProps } from "next";
import { api } from "../../api/axios";
import { ApiTypes } from "../../api/types";

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

         <Archieves
            name="sobre-mim.txt"
            icon={arquivo.src}
            about={portifolio.about}
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
