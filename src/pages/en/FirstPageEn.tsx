import { GetServerSideProps } from "next";
import { api } from "../api/axios";
import { ApiTypes } from "../api/types";
import { Header } from "../../components/FirstPage/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ContentOne } from "../../components/FirstPage/ContentOne";
import { ContentTwo } from "../../components/FirstPage/ContentTwo";

export default function FirstPageEn({ firstPage }: ApiTypes) {
  return (
    <>
      <Parallax pages={3} style={{ top: "0", left: "0", width: "100%", height: "100%" }}>

        <ParallaxLayer offset={0} factor={3} speed={2} style={{ background: "#fff", backgroundSize: "cover" }}>
          <Header text={firstPage.partOne.content} image={firstPage.partOne.images} altText="minha foto" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} factor={5} speed={1} style={{ background: "#87ceeb", backgroundSize: "cover" }}>
          <ContentOne text={firstPage.partTwo.content} image={firstPage.partTwo.images} altText="Uma aba de um Macbook com o simbolo do react" />

        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={5} speed={1}>
          <ContentTwo text={firstPage.partThree.content} image={firstPage.partThree.images} altText="te" />

        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get("/first-page-en")

  return {
    props: {
      firstPage: res.data,
    }
  }
}