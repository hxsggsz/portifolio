import { usePortifolio } from "../../hooks/usePortifolio";
import { HomeEn } from "../../components/mobile/home/homeEn";
import { LoockScreenEn } from "../../components/mobile/lockscreen/lockscreenEn";


export default function Mobile() {
  const { data } = usePortifolio('/portifolio-en')
  if (!data) {
    return []
  }
  return (
    <>
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

