import { api } from "../api/axios";
import { ApiTypes } from "../api/types"
import { GetServerSideProps } from "next";
import { About } from "../../components/LandingPage/about/About";
import { Navbar } from "../../components/LandingPage/navbar/Navbar";
import { HeaderLanding } from "../../components/LandingPage/header/Header";
import { Languages } from "../../components/LandingPage/languages/languages";
import { Projects } from '../../components/LandingPage/projects/projects';
import { Certificates } from "../../components/LandingPage/certificates/certificates";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import bg from "../../../public/pexels-stein-egil-liland-13122129.jpg";
import { EndPage } from "../../components/LandingPage/EndPage/EndPage";



export default function LandingPage({ portifolio }: ApiTypes) {
  const parallax = useRef<IParallax>(null!)

  const options = [
    { content: "Home", url: parallax.current?.scrollTo(0) },
    { content: "About", url: parallax.current?.scrollTo(1) },
    { content: "Languages", url: parallax.current?.scrollTo(2) },
    { content: "Projects", url: parallax.current?.scrollTo(3) },
    { content: "Certificates", url: parallax.current?.scrollTo(4) },
  ]

  return (
    <>
      <Navbar options={options} />
      <Parallax ref={parallax} pages={7} style={{ top: '0', left: '0', width: '100%', height: '100%' }}>

        <ParallaxLayer offset={0} speed={1} style={{ background: `${bg.src}`, backgroundSize: 'cover' }}>
          <HeaderLanding />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} style={{ background: `${bg.src}`, backgroundSize: 'cover' }} />

        <ParallaxLayer offset={2} factor={2} speed={0.5} style={{ background: '#000', backgroundSize: 'cover' }}>
          <About about={portifolio.about} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} factor={2} speed={1}>
          <Languages languages={portifolio.language} />
        </ParallaxLayer>

        <ParallaxLayer offset={4} factor={5} speed={1}>
          <Projects projects={portifolio.project} />
        </ParallaxLayer>

        <ParallaxLayer offset={5} factor={5} speed={1}>
          <Certificates cert={portifolio.certificate} />
        </ParallaxLayer>

        <ParallaxLayer offset={6} factor={1} speed={3} style={{ background: '#000', backgroundSize: 'cover' }} >
          <EndPage />
        </ParallaxLayer>
      </Parallax>


    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const abt = await api.get('/portifolio')
  return {
    props: {
      portifolio: abt.data
    }
  }
}