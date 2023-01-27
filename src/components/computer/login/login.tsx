import Image from "next/image";
import { StyledLogin } from './index';
import login from "../../../../public/login.png";
import { ArrowFatRight, Eye, EyeClosed } from "phosphor-react";
import Link from "next/link";
import { useState } from "react";

type loginTypes = {
   href: string
}

export const LoginWindows = ({ href }: loginTypes) => {
   const [isText, setIsText] = useState<boolean>(false)
   return (
      <StyledLogin>

         <Image width={220} height={210} src={login} alt='foto do windows' />

         <div>

            <label>
               <h2>PORTIFOLIO</h2>
            </label>

            <form>
               <input className="fake-input" type={isText ? 'text' : 'password'} disabled={true} defaultValue={'nãoé1234'} />

               <div onClick={() => setIsText(!isText)} className="eye">
                  {isText ? <EyeClosed style={{ cursor: 'pointer' }} color={'black'} size={25} /> : <Eye style={{ cursor: 'pointer' }} color={'black'} size={25} />}
               </div>

               <Link href={href}>
                  <ArrowFatRight color={'black'} size={25} />
               </Link>

            </form>

         </div>

      </StyledLogin>
   )
}