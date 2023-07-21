import { ComponentProps } from "react";

import * as S from "./styles";

interface ListProps extends ComponentProps<"ul"> {
  children: React.ReactNode;
}

export const ListRoot = ({ children }: ListProps) => {
  return <S.Root>{children}</S.Root>;
};
