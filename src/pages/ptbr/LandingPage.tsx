import { api } from "../api/axios";
import { ApiTypes } from "../api/types"
import { GetServerSideProps } from "next";
import { About } from "../../components/LandingPage/about/About";
import { Navbar } from "../../components/LandingPage/navbar/Navbar";
import { HeaderLanding } from "../../components/LandingPage/header/Header";
import { Languages } from "../../components/LandingPage/languages/languages";

const options = [
  { content: "Home", url: "" },
  { content: "About", url: "" },
  { content: "Languages", url: "" },
  { content: "Projects", url: "" },
  { content: "Certificates", url: "" }
]

export default function LandingPage({ firstPage, portifolio }: ApiTypes) {
  return (
    <>
      <Navbar options={options} />
      <HeaderLanding />
      <About about={portifolio.about} />
      <Languages languages={portifolio.language} />
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