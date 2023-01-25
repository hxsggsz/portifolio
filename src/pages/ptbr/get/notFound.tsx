import { api } from "../../api/axios";
import { GetServerSideProps } from "next";
import { ApiTypes } from "../../api/types";
import { Header } from "../../../components/Get/header/Header";
import { CardGet } from "../../../components/Get/cards/Cards";

export default function NotFound({ portifolio }: ApiTypes) {
   return (
      <>
         <Header href="/ptbr/get/" />
         <h1 style={{ marginTop: '10rem', display: 'flex', justifyContent: 'center' }}>Não encontrei o que procura mas isso pode ser útil.</h1>
         <CardGet title="certificado" cards={portifolio.certificate}/>
         <CardGet title="projetos" cards={portifolio.project}/>
         <CardGet title="linguages/frameworks que eu uso" cards={portifolio.language}/>

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