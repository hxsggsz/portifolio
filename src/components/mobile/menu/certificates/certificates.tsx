import { useMobile } from "../../../../hooks/useMobile"
import { App } from "../app/app"
import { Icon } from "../icons/icons"
import pastas from "../../../../../public/pastas.png"

type CertificateTypes = {
  name: string;
  cert: {
    id: string;
    name: string;
    images: string;
    description: string;
  }[];
}

export const Certificates = ({ name, cert }: CertificateTypes) => {
  const mobile = useMobile()
  return (
    <>
      <Icon setIsAppOpen={mobile.handleApp} image={pastas.src} name={name} />
      <App isAppOpen={mobile.isAppOpen} onAppOpen={mobile.handleApp} cert={cert} />
    </>
  )
}