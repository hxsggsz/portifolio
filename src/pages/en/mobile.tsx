import { usePortifolio } from "../../hooks/usePortifolio";
import { HomeEn } from "../../components/mobile/home/homeEn";
import { LoockScreenEn } from "../../components/mobile/lockscreen/lockscreenEn";
import Head from "next/head";
import { useMobile } from "../../hooks/useMobile";
import { LoockScreen } from "../../components/mobile/lockscreen/lockscreen";
import { Home } from "../../components/mobile/home/home";


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

      <LoockScreen isLocked={mobile.isLocked} handleLocked={mobile.handleIsLocked} />
      <Home
        about={data.about}
        lang={data.language}
        cert={data.certificate}
        projects={data.project}
      />
    </>
  );
}

