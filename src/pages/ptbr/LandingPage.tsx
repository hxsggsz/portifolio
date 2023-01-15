import { GetServerSideProps } from "next";
import { HeaderLanding } from "../../components/LandingPage/Header";
import { api } from "../api/axios";
import { ApiTypes } from "./types";
import { About } from "../../components/LandingPage/About";

export default function LandingPage({ api }: ApiTypes) {
  return (
    <>
      <HeaderLanding altText="minha foto" text="Bem-vindo" image={api.partOne.images} />
      <About />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/first-page')

  return {
    props: {
      api: res.data,
    }
  }
}