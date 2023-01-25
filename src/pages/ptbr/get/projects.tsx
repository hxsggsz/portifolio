import { api } from "../../api/axios";
import { GetServerSideProps } from "next";
import { ApiTypes } from "../../api/types";
import { Header } from "../../../components/Get/header/Header";
import { CardGet } from "../../../components/Get/cards/Cards";

export default function Projects({ portifolio }: ApiTypes) {
   return (
      <>
         <Header href="/ptbr/get/" />

         <CardGet title="projetos" cards={portifolio.project} />

      </>
   )
}

export const getServerSideProps: GetServerSideProps = async () => {
   const res = await api.get(`/portifolio`)

   return {
      props: {
         portifolio: res.data,
      }
   }
}