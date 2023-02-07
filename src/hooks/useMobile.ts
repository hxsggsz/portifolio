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

    async handleIsLocked() {
      setTimeout(() => {
        setMobile({
          ...mobile,
          isLocked: false,
        });
      }, 500);
    },
    handleMenu() {
      setMobile({
        ...mobile,
        isShowMenu: !mobile.isShowMenu,
      });
    },
  };
};
