import { usePortifolio } from "../../hooks/usePortifolio";
import { HomeEn } from "../../components/mobile/home/homeEn";
import Head from "next/head";
import { useMobile } from "../../hooks/useMobile";
import { LoockScreen } from "../../components/mobile/lockscreen/lockscreen";

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
      <HomeEn
        about={data.about}
        lang={data.language}
        cert={data.certificate}
        projects={data.project}
      />
    </>
  );
}

