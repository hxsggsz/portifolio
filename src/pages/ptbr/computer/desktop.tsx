import Head from "next/head";
import { Taskbar } from "../../../components/computer/desktop/taskbar/taskbar";
import { StyledDesktop } from "../../../components/computer/desktop";
import bg from '../../../../public/wallpaper.jpg'
import arquivo from '../../../../public/arquivo.png'
import { Icons } from "../../../components/computer/desktop/icons/icons";
import { GetServerSideProps } from "next";
import { api } from "../../api/axios";
import { ApiTypes } from "../../api/types";

export default function Login({ portifolio }: ApiTypes) {
   return (
      <StyledDesktop style={{ background: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
         <Head>
            <title>Portifolio - Desktop</title>
         </Head>

         <Icons name="sobre-mim.txt" icon={arquivo.src} about={portifolio.about} />

         <Taskbar />
      </StyledDesktop>
   )
}

export const getServerSideProps: GetServerSideProps = async () => {
   const abt = await api.get('/portifolio')
   return {
      props: {
         portifolio: abt.data,
      }
   }
}