import { GetServerSideProps, GetStaticProps } from "next"
import { api } from "../api/axios"
import { ApiTypes } from "./types"
import { Header } from "../../components/FirstPage/Header"

export default function FirstPage({ api }: ApiTypes) {
  console.log(api.page[0].images)
  return (
    <Header text={api.page[0].content} image={api.page[0].images} altText='minha foto' />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/portifolio')

  return {
    props: {
      api: res.data
    }
  }
}