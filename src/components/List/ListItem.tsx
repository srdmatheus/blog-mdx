import * as S from "./styles";

type ListItemsProps = {
  children: React.ReactNode;
};

export const ListItem = ({ children }: ListItemsProps) => {
  return <S.Item>{children}</S.Item>;
};
