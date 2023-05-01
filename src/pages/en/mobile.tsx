import Head from "next/head";
import { useMobile } from "../../hooks/useMobile";
import { usePortifolio } from "../../hooks/usePortifolio";
import { HomeEn } from "../../components/mobile/home/homeEn";
import { LoockScreenEn } from "../../components/mobile/lockscreen/lockscreenEn";

export default function Mobile() {
  const { data } = usePortifolio("/api/portifolio-en")
  const mobile = useMobile()
  if (!data) {
    return []
  }
  return (
    <>

      <Head>
        <title>Portifolio - Mobile</title>
      </Head>

      <LoockScreenEn />
      
      <HomeEn
        about={data.about}
        lang={data.language}
        cert={data.certificate}
        projects={data.project}
      />
    </>
  );
}

