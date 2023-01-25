import Image from "next/image";
import { StyledLogin } from './index';
import bg from '../../../../public/login-background.jpg'
import flower from "../../../../public/flower2.png";
import { ArrowFatRight } from "phosphor-react";
import Link from "next/link";

type loginTypes = {
   href: string
}

export const LoginWindows = ({ href }: loginTypes) => {
   return (
      <StyledLogin style={{ background: `url(${bg.src})`, backgroundSize: 'cover' }}>
         <Image width={200} height={210} src={flower} alt='foto do windows' />
         <div>
            <label>
               <h2>PORTIFOLIO</h2>

               <form>
                  <div className="fake-input"><p>********</p></div>
                  <Link href={href}>
                     <button><ArrowFatRight color={'white'} weight="fill" size={25} /></button>
                  </Link>
               </form>
            </label>
         </div>
      </StyledLogin>
   )
}