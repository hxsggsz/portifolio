import LanguageStyles from ".";
import Image from "next/image";
import Typist from "react-typist-component";
import { ButtonRedirect } from "./ButtonRedirect";
import brasil from "../../../public/brasiljpg.jpg";
import eua from "../../../public/bandeira-estados-unidos.jpg";

export const Language = () => {
  return (
    <LanguageStyles>
      <section>
        <div className="language">
          <Typist cursor={"|"} loop={true}>
            <h1>Escolha a sua linguagem</h1>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={23} />

            <h1>Choose your language</h1>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={20} />
          </Typist>
        </div>

        <div className="bandeiras">
          <ButtonRedirect href="ptbr/FirstPage">
            <Image width={65} height={50} src={brasil} alt="bandeira do brasil" />
          </ButtonRedirect>

          <ButtonRedirect href="en/FirstPageEn">
            <Image width={65} height={50} src={eua} alt="bandeira do brasil" />
          </ButtonRedirect>
        </div>
      </section>
    </LanguageStyles>
  )
}
