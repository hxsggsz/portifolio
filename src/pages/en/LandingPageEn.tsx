import { api } from "../api/axios";
import { ApiTypes } from '../api/types';
import { GetServerSideProps } from "next";
import { About } from "../../components/LandingPage/about/About";
import { Navbar } from "../../components/LandingPage/navbar/Navbar";
import { MenuButton } from "../../components/MenuButton/MenuButton";
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
         <HeaderLanding title={"Hello and Welcolme"} description={"Here is some informations about me"} />
         <About title="About me!" about={portifolio.about} />
         <Languages title="Some languages and Frameworks that i use" languages={portifolio.language} />
         <Projects title="My Projects" projects={portifolio.project} />
         <Certificates title="My Certificates" cert={portifolio.certificate} />
         <EndPage />
         <MenuButton title={contact.text} curriculo={contact.curriculum} />
      </>
   )
}

export const getServerSideProps: GetServerSideProps = async () => {
   const port = await api.get('/portifolio-en')
   const contact = await api.get('/contact-en')
   return {
      props: {
         portifolio: port.data,
         contact: contact.data
      }
   }
}