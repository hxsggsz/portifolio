import Image from "next/image"
import { StyledDesktop } from "."
import bg from "../../../../public/login-background.jpg"
import logo from "../../../../public/windows-logo.png"
import { useState } from 'react';

export const Desktop = () => {
   const [show, setShow] = useState(false)

   return (
      <StyledDesktop style={{ background: `url(${bg.src})`, backgroundSize: 'cover' }}>
         <div className="logo">
            <Image width={300} height={300} src={logo} alt='windows logo' />
         </div>

         <div className="taskbar">
            <div className="taskbar-content">
               <div className="win-button">
                  <Image onClick={() => setShow(!show)} width={30} height={30} src={logo} alt='windows logo' />
                  {show && <div>fazer a implementação que ta no notion aqui</div>}
               </div>

            </div>
         </div>
      </StyledDesktop>
   )
}