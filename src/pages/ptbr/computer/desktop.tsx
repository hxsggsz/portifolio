import Head from "next/head";
import { Desktop } from "../../../components/computer/desktop/desktop";
import { Taskbar } from "../../../components/computer/desktop/taskbar/taskbar";

export default function Login() {
   return (
      <>
         <Head>
            <title>Portifolio - Desktop</title>
         </Head>

         <Desktop />
         <Taskbar />
      </>
   )
}