import { Icon } from "../icons/icons";
import pastas from "../../../../../public/pastas.png";
import { useMobile } from "../../../../hooks/useMobile";
import { App } from "../app/app";
type TypeLangs = {
  name: string;
  lang: {
    id: string;
    name: string;
    images: string;
  }[];
};

export const Languages = ({ name, lang }: TypeLangs) => {
  const mobile = useMobile();
  return (
    <>
      <Icon
       setIsAppOpen={mobile.handleApp}
       image={pastas.src} 
       name={name}
      />
      <App
        isAppOpen={mobile.isAppOpen}
        onAppOpen={mobile.handleApp}
        lang={lang}
      />
    </>
  );
};
