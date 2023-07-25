import { CloseIcon, OpenIcon } from "@/components/Icons";

type ToggleButtonProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const ToggleButton = ({
  isOpenMenu,
  handleToggleMenu
}: ToggleButtonProps) => {
  const textTitle = isOpenMenu ? "Fechar menu" : "Abrir menu";

  return (
    <button onClick={handleToggleMenu} title={textTitle}>
      {isOpenMenu ? (
        <CloseIcon size={24} data-testid="close-icon" />
      ) : (
        <OpenIcon size={24} data-testid="open-icon" />
      )}
    </button>
  );
};
