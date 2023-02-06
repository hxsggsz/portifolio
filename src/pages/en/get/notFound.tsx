import { api } from "../../api/axios";
import { GetServerSideProps } from "next";
import { ApiTypes } from "../../api/types";
import { Header } from "../../../components/Get/header/Header";
import { CardGet } from "../../../components/Get/cards/Cards";

export default function NotFound({ portifolio }: ApiTypes) {
   return (
      <>
         <Header href="/en/get/" />
         <h1 style={{ marginTop: '10rem', display: 'flex', justifyContent: 'center' }}> I did not find what you search but this can be usefull.</h1>
         <CardGet title="certificates" cards={portifolio.certificate} />
         <CardGet title="projects" cards={portifolio.project} />
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