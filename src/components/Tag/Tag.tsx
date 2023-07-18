import { ReactNode } from "react";

import * as S from "./styles";

export type TagProps = {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
};

export const Tag = ({ children, size = "xs" }: TagProps) => {
  return <S.Tag size={size}>{children}</S.Tag>;
};
