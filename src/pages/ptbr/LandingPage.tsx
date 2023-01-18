import { GetServerSideProps } from "next";
import { HeaderLanding } from "../../components/LandingPage/Header";
import { api } from "../api/axios";
import { ApiTypes } from "../api/types"
import { About } from "../../components/LandingPage/about/About";
import { SmallClouds } from "../../components/LandingPage/clouds/SmallClouds";
import { UseSlider } from "../../hooks/useSlider";

export default function LandingPage({ firstPage, portifolio }: ApiTypes) {
  return (
    <>
      <HeaderLanding altText="minha foto" text="Bem-vindo" image={firstPage.partOne.images} />
      <About clouds={portifolio.about} />

      <SmallClouds SmClouds={portifolio.language} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/first-page')
  const abt = await api.get('/portifolio')
  return {
    props: {
      firstPage: res.data,
      portifolio: abt.data,
    }
  }
}