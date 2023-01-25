import { api } from "../api/axios";
import { ApiTypes } from "../api/types"
import { GetServerSideProps } from "next";
import { About } from "../../components/LandingPage/about/About";
import { MenuButton } from "../../components/MenuButton/MenuButton";
import { Navbar } from "../../components/LandingPage/navbar/Navbar";
import { EndPage } from "../../components/LandingPage/EndPage/EndPage";
import { Projects } from '../../components/LandingPage/projects/projects';
import { HeaderLanding } from "../../components/LandingPage/header/Header";
import { Languages } from "../../components/LandingPage/languages/languages";
import { Certificates } from "../../components/LandingPage/certificates/certificates";

const options = [
  { content: "Home", url: 'header' },
  { content: "About", url: 'about' },
  { content: "Languages", url: 'languages' },
  { content: "Projects", url: 'projects' },
  { content: "Certificates", url: 'certificates' },
]

export default function LandingPage({ portifolio, contact }: ApiTypes) {

  return (
    <>
      <Navbar options={options} />
      <HeaderLanding title={"Olá e seja bem-vindo"} description={"Aqui abaixo tem algumas informações sobre mim!"} />
      <About title="Um pouco sobre mim!" about={portifolio.about} />
      <Languages title="Algumas linguagens e Frameworks que eu utilizo" languages={portifolio.language} />
      <Projects title="Meus Projetos" projects={portifolio.project} />
      <Certificates title="Meus Certificados" cert={portifolio.certificate} />
      <EndPage />
      <MenuButton title={contact.text} curriculo={contact.curriculum} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const abt = await api.get('/portifolio')
  const contact = await api.get('/contact')
  return {
    props: {
      portifolio: abt.data,
      contact: contact.data

    }
  }
}