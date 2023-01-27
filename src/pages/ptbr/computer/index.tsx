import Head from "next/head";
import { LoginWindows } from "../../../components/computer/login/login";

export default function Login() {
   return (
      <>
         <Head>
            <title>Portifolio - Login</title>
         </Head>

         <LoginWindows href="/ptbr/computer/desktop" />
      </>
   )
}