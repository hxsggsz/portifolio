import { useState } from "react";

// hook com todas as funções da pagina Computer
export const useMobile = () => {
  const [mobile, setMobile] = useState({
    isAppOpen: false,
  });

  return {
    ...mobile,
    handleApp() {
      setMobile({
        ...mobile,
        isAppOpen: !mobile.isAppOpen,
      });
    },
  };
};
