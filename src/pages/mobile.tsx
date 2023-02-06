import { GetServerSideProps } from "next";
import { Home } from "../components/mobile/home/home";
import { LoockScreen } from "../components/mobile/lockscreen/lockscreen";
import { api } from "./api/axios";
import { ApiTypes } from "./api/types";

export default function Mobile({ portifolio }: ApiTypes) {
  return (
    <>
      {/* <LoockScreen /> */}
      <Home about={portifolio.about} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/portifolio");
  return {
    props: {
      portifolio: response.data,
    },
  };
};