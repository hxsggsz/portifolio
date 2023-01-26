import Head from "next/head";
import { LoginWindows } from "../../../components/windows/login/login";

export default function Login() {
   return (
      <>
         <Head>
            <title>Windows - Login</title>
            <link rel="icon" href="/windows.ico" />
         </Head>
         <LoginWindows href="/ptbr/windows/desktop" />
      </>
   )
}