import { useCallback, useState } from "react";

export const useMainNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsOpenMenu((prev) => !prev);
  }, []);

  return { isOpenMenu, handleToggleMenu };
};
