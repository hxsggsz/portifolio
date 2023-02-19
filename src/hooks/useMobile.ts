import { useState } from "react";

// hook com todas as funções da pagina Computer
export const useMobile = () => {
  const [mobile, setMobile] = useState({
    isAppOpen: false,
    isLocked: true,
    isShowMenu: false,
  });

  return {
    ...mobile,
    handleApp() {
      setMobile({
        ...mobile,
        isAppOpen: !mobile.isAppOpen,
      });
    },

    handleIsLocked() {
      setMobile({
        ...mobile,
        isLocked: false,
      });
    },
    handleMenu() {
      setMobile({
        ...mobile,
        isShowMenu: !mobile.isShowMenu,
      });
    },
  };
};
