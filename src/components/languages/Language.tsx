import Image from "next/image"
import LanguageStyles from "."
import Typist, { TypistProps } from 'react-typist-component'
import brasil from '../../../public/brasiljpg.jpg'
import eua from '../../../public/bandeira-estados-unidos.jpg'
import { ButtonRedirect } from "./ButtonRedirect"

export const Language = () => {
  return (
    <LanguageStyles>
      <section>
        <div className="language">
          <Typist cursor={'|'} loop={true}>
            <h1>Escolha a sua linguagem</h1>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={23} />

            <h1>Choose your language</h1>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={20} />
          </Typist>
        </div>

        <div className="bandeiras">
          <ButtonRedirect href='ptbr/FirstPage'>
            <Image width={65} height={50} src={brasil} alt='bandeira do brasil' />
          </ButtonRedirect>

          <ButtonRedirect href=''>
            <Image width={65} height={50} src={eua} alt='bandeira do brasil' />
          </ButtonRedirect>
        </div>
      </section>
    </LanguageStyles>
  )
}
