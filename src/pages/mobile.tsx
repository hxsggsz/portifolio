import { useFetcher } from "../hooks/useFetcher";
import { Home } from "../components/mobile/home/home";
import { LoockScreen } from "../components/mobile/lockscreen/lockscreen";

export default function Mobile() {
  const { data } = useFetcher('/portifolio')
  if (!data) {
    return []
  }
  return (
    <>
      <LoockScreen />
      <Home
        about={data.about}
        lang={data.language}
        cert={data.certificate}
        projects={data.project}
      />
    </>
  );
}