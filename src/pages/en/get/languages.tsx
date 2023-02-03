import { api } from "../../api/axios";
import { GetServerSideProps } from "next";
import { ApiTypes } from "../../api/types";
import { Header } from "../../../components/Get/header/Header";
import { CardGet } from "../../../components/Get/cards/Cards";

export default function Languages({ portifolio }: ApiTypes) {
   return (
      <>
         <Header href="/en/get/" />

         <CardGet title="languages/frameworks that i use" cards={portifolio.language} />

      </>
   )
}

export const getServerSideProps: GetServerSideProps = async () => {
   const res = await api.get(`/portifolio-en`)

   return {
      props: {
         portifolio: res.data,
      }
   }
}