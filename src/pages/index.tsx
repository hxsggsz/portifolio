import Head from "next/head";
import { LoginWindows } from "../components/computer/login/login";
import { useState } from "react";

export default function Login() {
   const [isText, setIsText] = useState(false);
   return (
      <>
         <Head>
            <title>Portifolio - Login</title>
         </Head>

         <LoginWindows
            href="/desktop"
            defaultValue="naoé1234"
            isText={isText}
            setIsText={() => setIsText(!isText)}
         />
      </>
   );
}
