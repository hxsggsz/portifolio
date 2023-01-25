import { GetServerSideProps } from "next/types"
import { api } from "../../api/axios"
import { ApiTypes } from "../../api/types";
import Image from "next/image";
import { Header } from "../../../components/Get/header/Header";
import { CardGet } from "../../../components/Get/cards/Cards";

export default function Certificate({ portifolio }: ApiTypes) {
   return (
      <>
         <Header href="/en/get/" />

         <CardGet title="certificates" cards={portifolio.certificate} />

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