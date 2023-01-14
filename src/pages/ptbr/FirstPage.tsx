import { GetServerSideProps, GetStaticProps } from "next"
import { api } from "../api/axios"
import { ApiTypes } from "./types"
import { Header } from "../../components/FirstPage/Header"
import { ContentOne } from "../../components/FirstPage/ContentOne"
import { ContentTwo } from "../../components/FirstPage/ContentTwo"

export default function FirstPage({ api, abt }: ApiTypes) {
  return (
    <>
      <Header text={api.partOne.content} image={api.partOne.images} altText='minha foto' />
      <ContentOne text={api.partTwo.content} image={api.partTwo.images} altText='Uma aba de um Macbook com o simbolo do react' />
      <ContentTwo text={api.partThree.content} image={api.partThree.images} altText='te' />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/first-page')
  const response = await api.get('/portifolio')

  return {
    props: {
      api: res.data,
      abt: response.data
    }
  }
}