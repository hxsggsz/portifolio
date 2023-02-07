import { api } from "../api/axios";
import { ApiTypes } from "../api/types";
import { GetServerSideProps } from "next";
import { HomeEn } from "../../components/mobile/home/homeEn";
import { LoockScreenEn } from "../../components/mobile/lockscreen/lockscreenEn";


export default function Mobile({ portifolio }: ApiTypes) {
  return (
    <>
      <LoockScreenEn />
      <HomeEn
        about={portifolio.about}
        lang={portifolio.language}
        cert={portifolio.certificate}
        projects={portifolio.project}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/portifolio-en");
  return {
    props: {
      portifolio: response.data,
    },
  };
};
